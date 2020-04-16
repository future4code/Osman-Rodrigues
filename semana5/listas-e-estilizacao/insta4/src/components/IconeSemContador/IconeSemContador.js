import React from 'react'
import './IconeSemContador.css'

export function IconeSemContador(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}