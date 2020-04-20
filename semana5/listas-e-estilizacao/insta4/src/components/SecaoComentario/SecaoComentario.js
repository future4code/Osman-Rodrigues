import React, {Component} from 'react'
import styled from 'styled-components'

let CommentContainer = styled.main `
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 5px;
`;
let CommentForm = styled.section `
	display: flex;
	flex-direction: row;
`
let CommentInput = styled.input `
	width: 100%;
	margin-right: 5px;
`;
let SendCommentButton = styled.button `

`;
let CommentsTimeline = styled.section `

`;

export class SecaoComentario extends Component {
	state = {
		comentarios: [],
		valorComentario: ''
	}
	onChangeComentario =(event)=>{
		this.setState({ valorComentario: event.target.value })
	}
	
	render() {
		return (
			<CommentContainer>
				<CommentForm>
					<CommentInput
						placeholder={'Comentário'}
						value={this.state.valorComentario}
						onChange={this.onChangeComentario}
					/>
					<SendCommentButton onClick={this.props.aoEnviar}>Enviar</SendCommentButton>
				</CommentForm>
				
				<CommentsTimeline>
					Comment here
				</CommentsTimeline>
			</CommentContainer>
		)
	}
}
