import { CasaDeCambioForm } from "../components/CasaDeCambioForm"
import { CasaDeCambioRegistros } from "../components/CasaDeCambioRegistros";
import { guardarRegistros } from "../hooks/useGuardarRegistros"

export const CasaDeCambioPage = () => {
    
    const {registros, onRegistrar, onBorrar} = guardarRegistros();
    
    return (
        <>
            <h1 className="headerPrincipal">CasaDeCambio App</h1>

            <CasaDeCambioForm onNewRegistro={onRegistrar} onBorrarRegistros={onBorrar} />
            <CasaDeCambioRegistros arregloRegistros={registros} />

            <footer>
                <p>Todos los Derechos Reservados. Ernesto Galindo 2023</p>
            </footer>

        </>
    )
}
