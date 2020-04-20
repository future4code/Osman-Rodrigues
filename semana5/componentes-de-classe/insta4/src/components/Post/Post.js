import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import iconeMarcadoBranco from '../../img/bookmark_border-24px.svg'
import iconeMarcadorPreto from '../../img/bookmark-24px.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar from '../../img/share-24px.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentado: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhado: false
  }

  onClickCurtida = () => {
    if (this.state.numeroCurtidas === 0){
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }else{
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }
  onClickComentario = () => {
    this.setState({
      comentado: !this.state.comentado
    })
  }
  onClickMarcador = () =>{
    this.setState({
      marcado: !this.state.marcado
    })
  }
  onClickCompartilhar = () =>{
    this.setState({
      compartilhado: !this.state.compartilhado
    })
  }

  aoCompartilhar = () =>{
    this.setState({
      compartilhado: false
    })
  }
  aoEnviarComentario = () => {
    this.setState({
      comentado: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentado) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhado) {
      componenteCompartilhar = <SecaoCompartilhar aoCompartilhar={this.aoCompartilhar}/>
    }

    let iconeMarcador

    if(this.state.marcado) {
      iconeMarcador = iconeMarcadorPreto
    } else {
      iconeMarcador = iconeMarcadoBranco
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeSemContador
          icone={iconeMarcador}
          onClickIcone={this.onClickMarcador}
        />
        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />
      </div>
      
      {componenteComentario}

      {componenteCompartilhar}
    </div>
  }
}

export default Post