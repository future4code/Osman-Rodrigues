import React, {Component} from 'react'
import './SecaoCompartilhar.css'
import './../IconeSemContador/IconeSemContador'
import { IconeSemContador } from './../IconeSemContador/IconeSemContador'

export class SecaoCompartilhar extends Component {
	state = {
		valorCompartilhar: '',
		msgCompartilhar: '',
	}
	onChangeCompartilhar =(event)=>{
		this.setState({ valorCompartilhar: event.target.value })
	}
	onClickInsta = ()=>{
		this.setState({ msgCompartilhar: this.state.msgCompartilhar+'compartilhado no Instagram' })
	}
	onClickFace = ()=>{
		this.setState({ msgCompartilhar: this.state.msgCompartilhar+'compartilhado no Facebook' })
	}
	onClickTwitter = ()=>{
		this.setState({ msgCompartilhar: this.state.msgCompartilhar+'compartilhado no Twitter' })
	}
	aoCompartilhar = () =>{
		console.log(`Post ${this.state.msgCompartilhar} com a mensagem "${this.state.valorCompartilhar}"`)
	}
	render() {

		return (
		<div className={'share-container'}>
			<div className={'socialmedia-icons-container'}>
				<IconeSemContador
				icone ={'https://cdn.iconscout.com/icon/free/png-64/instagram-216-721958.png'}
				onClickIcone ={this.onClickInsta}
				/>
				<IconeSemContador
				icone ={'https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-2-1.png'}
				onClickIcone ={this.onClickFace}
				/>
				<IconeSemContador
				icone ={'https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png'}
				onClickIcone ={this.onClickTwitter}
				/>
			</div>
			<textarea
				className={'input-compartilhar'}
				placeholder={'Mensagem de Compartilhamento'}
				value={this.state.valorCompartilhar}
				onChange={this.onChangeCompartilhar}
			/>
			<div className={'botao-compartilhar'}>
				<button  onClick={this.aoCompartilhar}>Compartilhar</button>
			</div>
		</div>
		)
	}
}
