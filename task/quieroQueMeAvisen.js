const { InscripcionesCursos, Curso, Categoria } = require('../db')
//const cursos = require('./cursosAndCategias')
const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
	host: "webmail.empleo.chaco.gob.ar",
	port: 465,
  	secure: true, // use TLS
	auth: {
		user: 'empleo.chaco.gob.ar@empleo.chaco.gob.ar',
    	pass: 'empleo!2021'
	},
	tls: {
		// do not fail on invalid certs
		rejectUnauthorized: false
	}
});

const checkDate = (fecha) => {
    let valido = false
    if (fecha.length > 0) {
        fecha.forEach(element => {
            let d1 = element.empieza.split("/");
            let d2 = element.termina.split("/");

            let from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);  // -1 because months are from 0 to 11
            let to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
            let check = new Date();

            if (check > from && check < to) {
                valido = {
                    state: true,
                    to: element.termina
                }
            }
        });
    } else {
        valido = true
    }
    return valido
}

const checkInscripcionesCursos = async () => {

    const inscriptos = await InscripcionesCursos.findAll({
        where: {
            estado: 1
        }
    })

    const cursos = await Categoria.findAll({
		include: [{
			model: Curso, 
		}]
	})

    
    if (inscriptos && inscriptos.length > 0) {
        for (const e of inscriptos) {
            for (const list of cursos) {
                let curso = list.Cursos.find(curso => curso.nombre === e.dataValues.nombreCurso)
                //si existe curso y la fecha de inscripcion esta en curso
                let feachas = curso?checkDate(curso.fechaInscrpcion):false
                if (curso && feachas && curso.active) {
                    //cambio el estado = 1 para que no lo busque mas y mando mail
                    let res = await e.update({ 
                        estado: 0 
                    })
                    if (res) {

                        let mailOptionSendpack = {
                            from: 'empleo.chaco.gob.ar@empleo.chaco.gob.ar',
                            to: e.dataValues.email,
                            subject: `inscripción a ${e.dataValues.nombreCurso}`,
                            html: `
                                    <table style="max-width: 800px; padding: 10px; margin:0 auto; border-collapse: collapse;">
                                        <tr>
                                            <td style="background-color: #ecf0f1">
                                                <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                                    <h2 style="color: #e67e22; margin: 0 0 7px">Hola!</h2>
                                                    <p style="margin: 2px; font-size: 15px">
                                                        ${e.dataValues.nombre}  ${e.dataValues.apellido} ya puedes inscribirte al cursado de ${e.dataValues.nombreCurso}
                                                    </p>
                                                    <p></p>
                                                    <div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
                                                        <h2 style="color: #e67e22; margin: 0 0 7px">Datos del curso</h2>
                                                        <ul>
                                                            <li>Curso: ${e.dataValues.nombreCurso}</li>
                                                            <li>Podrás Inscribirte hasta el: ${feachas.to}</li>
                                                            <li 
                                                                style="margin-top: 1em;"
                                                            >
                                                                <a 
                                                                    style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" 
                                                                    href="https://empleo.chaco.gob.ar/curso/${list.categoria.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').replace(/\?/g, '').replace(/\¿/g, '')}/${e.dataValues.nombreCurso.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').replace(/\?/g, '').replace(/\¿/g, '')}"
                                                                >
                                                                    Ir al Curso
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p></p>
                                                    <div style="width: 100%; text-align: center">
                                                    </div>
                                                    <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">empleo.chaco.gob.ar</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                `
                        };
                        smtpTransport.sendMail(mailOptionSendpack);	
                    }
                }
            }
        }
    }
}
    
module.exports = {
    checkInscripcionesCursos
}