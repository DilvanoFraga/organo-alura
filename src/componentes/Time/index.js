import Colaborardor from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}

    return(
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborardor corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imgem={colaborador.imagem}/>)}
            </div>
        </section>

        : ''

    )
}

export default Time