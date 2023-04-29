export const newUserTemplate = (id, date) => {
    return `
    <h2>¡Nuevo usuario Creado!</h2>
 
        <li><strong>UUID:</strong> ${id}</li>
        <li><strong>FECHA:</strong> ${date}</li>
    </ul>
    `
};