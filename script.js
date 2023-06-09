const container = document.getElementById('table__cuerpos');

const URL_API = 'http://localhost:3000/movimientos';

const listMovimientos = [];

const getMovimientos = async () => {
    try {
        const response = await axios.get(URL_API);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

document.addEventListener('DOMContentLoaded', async () => {
   try {
    const movimientos = await getMovimientos();
    console.log(movimientos);
    movimientos.forEach((movimiento) => {
        listMovimientos.push(movimiento);
    })
    printTable();
   } catch (error) {
    console.log(error);
   }
})

const printTable = () => {
    console.log(listMovimientos)
    container.innerHTML = '';
    listMovimientos.forEach(movimiento => {
        container.innerHTML +=`
            <tr>
                <td>${movimiento.id}</td>
                <td>${movimiento.description}</td>
                <td>${movimiento.price}</td>
                <td>${movimiento.type}</td>
            </tr>
        `
    })

}