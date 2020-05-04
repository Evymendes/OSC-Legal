/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable class-methods-use-this */
// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import ImageDocument from '../../../assets/document.png';
import magnifyingGlass from '../../../assets/magnifyingGlass.svg';
import DownloadIcon from '../../../assets/download.svg';
import DownloadWhiteIcon from '../../../assets/downloadwhite.svg';
import Exit from '../../../assets/exit.svg';
import DeleteIcon from '../../../assets/delete.svg';
import documentWhite from '../../../assets/documentWhite.svg'

import Header from '../components/Header';
import Scrollbar from '../components/Scrollbar';

const Container = styled.div`
  width: 100%;
	height: 90%;

	@media (max-width: 490px) {
		padding-top: 1rem;
	}
`;

const ContainerHeader = styled.div`
	margin: 3rem 4rem 0 4rem;
  display: flex;
  justify-content: space-between;

	@media (max-width: 768px) {
		margin: 3rem 2rem 0 2rem;
	}

	@media (max-width: 490px) {
		margin: 1.2rem;
	}
`;

const AddModelImage = styled.img`
	width: 35%;

	@media (max-width: 490px) {
		display: none;
	}
`;

const TitleSearch = styled.p`
  color: #85144B;
  font-size: 2rem;
  font-family: "Overpass", Black;
  font-weight: 600;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}

	@media (max-width: 490px) {
		display: none;
	}
`;

const ContainerContent = styled.div`
	padding-top: 3rem;
	padding-right: 3rem;
	width: 100%;
	display: flex;

	@media (max-width: 768px) {
		padding-right: 1rem;
		padding-top: 2rem;
	}

	@media (max-width: 490px) {
		padding: 0 1.2rem;
		flex-direction: column;
	}
`;

const ContainerAddModel = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (max-width: 490px) {
		display: flex;
		order: 1;
		width: 100%;
	}
`;

const ContainerSearch = styled.div`
	margin-right: 2rem;
	width: 35%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 1024px) {
		margin-right: 1.1rem;
	}

	@media (max-width: 768px) {
		margin-right: .6rem;
		width: 40%;
	}

	@media (max-width: 490px) {
		width: 100%;
		margin-right: 0;
	}
`;

const SearchText = styled.p`
  color: #231F20;
  font-size: 1.2rem;
  font-family: Overpass, Bold;
	font-weight: 600;
  margin-right: 0.8rem;

	@media (max-width: 490px) {
		display: none;
	}
`;

const ContainerSearchInput = styled.label`
	display: flex;
	width: 100%;
	border-radius: 3px;
  padding: 0.7rem;
	border: ${props => (props.clickLabel ? '1px solid #FF4136' : '0.5px solid #85144B')};

	img {
		margin: 0 0 0 10px;
	}
`;

const SearchInput = styled.input`
  width: 100%;
  border: 0;
	outline: none;

	@media (max-width: 768px) {
		&::placeholder {
			font-size: .7rem;
		}
	}
`;

const ContainerModels = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const ContainerModel = styled.div`
	margin-bottom: 1rem;
	padding: 2rem;
	width: 95%;
	height: 100%;
	display: flex;
	cursor: pointer;
	position: relative;
	z-index: ${props => (props.zIndex ? '-1' : 0)};

	&:hover {
		border:1px solid #85144B;

		&::before {
			content: '';
			background: #85144B;
			width: 1px;
			height: 100%;
			top: 0;
			right: 12rem;
			position: absolute;

			@media (max-width: 1024px) {
				right: 10rem;
			}

			@media (max-width: 490px) {
				display: none;
			}
		}	
	}

	@media (max-width: 768px) {
		padding: 1.3rem;
	}

	@media (max-width: 490px) {
		width: 100%;
		padding: 1rem;
		order: 3;
	}
`;

const ContainerModelDescription = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;

	span {
		display: flex;

		@media (max-width: 1024px) {
			width: 76%;
		}

		@media (max-width: 768px) {
			width: 95%;
		}

		@media (max-width: 490px) {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		width: 70%;
	}

	@media (max-width: 490px) {
		width: 100%;
	}
`;

const ModelNumber = styled.h2`
	margin-right: 0.5rem;
	color: #FF4136;
	font-family: "Overpass", Black;
	font-size: 1.5rem;
`;

const ModelTitle = styled.h2`
	margin-bottom: .5rem;
  color: #85144B;
  font-family: "Overpass", Black;

	@media (max-width: 768px) {
		font-size: 1.3rem;
	}
`;

const ModelParagraph = styled.p`
  width: 92%;
  font-size: 1.2rem;
  font-family: 'Overpass', Regular;

	@media (max-width: 768px) {
		font-size: 1rem;
	}

	@media (max-width: 490px) {
		width: 100%;
	}
`;

const ContainerOptions = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	@media (max-width: 768px) {
		margin-left: 1.7rem;
	}

	@media (max-width: 490px) {
		/* display: ${props => props.contOptions}; */
		display: none;
	}
`;

const Option = styled.button`
	margin-bottom: 1rem;
	width: 7rem;
	height: 2.5rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: transparent;
	border: none;
	border-radius: 4px;

	&:hover {
		background: #FF4136;
	}

	@media (max-width: 768px) {
		width: 6rem;
	}
`;

const OptionImage = styled.img`

	@media (max-width: 768px) {
		width: 15px;
		height: 15px;
	}
`;

const OptionText = styled.p`
	color: #85144B;
	font-size: 1.2rem;
	font-family: "Overpass", SemiBold;

	&:hover {
		color: #ffffff;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const Button = styled.button`
  margin: 2rem;
	padding: 1.3rem;
  width: 60%;
  border: 0;
  color: #fff;
  box-shadow: 0 3px 6px #00000029;
  border-radius: 3px;
  font-size: 1.2rem;
	font-family: "Overpass", SemiBold;
  font-weight: bold;
  background-color: #FF4136;

	@media (max-width: 1024px) {
		padding: 1rem;
		width: 70%;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
		width: 75%;
	}

	@media (max-width: 490px) {
		font-size: 1.2rem;
		width: 100%;
	}
`;

const ContainerModal = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
	background: rgba(112, 112, 112, 0.5);

	@media (max-width: 490px) {
		flex-direction: column;
	}
`;

const ModalAddModel = styled.form`
	width: 660px;
	height: 560px;
	background: #FFFFFF;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 4px;
	padding: 1% 2% 2% 3%;

	@media (max-width: 1024px) {
		height: 540px;
	}

	@media (max-width: 490px) {
		height: 100%;
		width: 100%;
		padding: 5%;
	}
`;

const HeaderAddModel = styled.div`
	display: flex;
	justify-content: space-between;

	img {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`;

const TitleAddModel = styled.h2`
	color: #85144B;
	font-size: 2rem;
	margin-top: 2%;
	margin-bottom: 1%;
	margin-left: 1rem;
  font-family: "Overpass", Bold;
  font-weight: 600;

	@media (max-width: 490px) {
		font-size: 1.8rem;
	}
`;

const ContainerInputs = styled.div`
	display: flex;
	flex-direction: column;
`;

const UploadFile = styled.label`
	width: 100%;
	display: flex;
	margin-bottom: 1rem;
	border-radius: 3px;
	padding: 3% 2.5%;
	border: 1px solid #85144B;
	background: #FAFAFA;
	font-size: 1.1rem;
	font-family: "Overpass", SemiBold;

	&:focus {
		outline: 1px solid #ff4136;
	}

	input[type='file'] {
		display: none;
	}

	img {
		width: 50px;
	}
`;

const TextUploadFile = styled.div`
	width: 34%;
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
	font-family: "Overpass", SemiBold;
	font-size: .9rem;
	color: #959595;

	h3 {
		font-family: "Overpass", Bold;
		margin-bottom: .5rem;
		font-size: 1.2rem;
	}

	span {
		cursor: pointer; 
		text-decoration: underline;
	}

	@media (max-width: 490px) {
		width: 52%;
	}
`;

const ContainerInput = styled.label`
`;

const TitleInputs = styled.h3`
	color: #85144B;
	font-size: .8rem;
	margin-left: 1rem;
	margin-bottom: 0.2rem;
  font-family: "Overpass", Bold;
  font-weight: 600;
	text-transform: uppercase;
`;

const Input = styled.input`
	width: 100%;
	margin-bottom: 1rem;
	border-radius: 3px;
	padding: 3% 2.5%;
	border: 1px solid #85144B;
	background: #FAFAFA;
	font-size: 1.1rem;
	font-family: "Overpass", SemiBold;

	&:focus {
		outline: 1px solid #ff4136;
	}
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 150px;
	border-radius: 3px;
	padding: 3% 2.5%;
	margin-bottom: 1rem;
	border: 1px solid #85144B;
	background: #FAFAFA;
	font-size: 1.1rem;
	font-family: "Overpass", SemiBold;

	&:focus {
		outline: 1px solid #ff4136;
	}

	@media (max-width: 490px) {
		height: 100px;
	}
`;

const ButtonAdd = styled(Button)`
	align-self: flex-end;
	width: 55%;
	margin: 0;
	text-transform: uppercase;

	@media (max-width: 1024px) {
		font-size: .9rem;
		width: 55%;
		padding: .8rem;
	}

	@media (max-width: 768px) {
		font-size: .9rem;
		width: 60%;
		padding: 1rem;
		margin: 0;
	}

	@media (max-width: 490px) {
		width: 100%;
		font-size: 1.2rem;

	}
`;

const ContainerModalDelete = styled(ContainerModal)`
	@media (max-width: 490px) {
		background: #ffffff;
	}
`;

const ModalDelete = styled(ModalAddModel)`
	width: 460px;
	height: 325px;
	padding: 1% 1% 1% 2%;

	@media (max-width: 490px) {
		width: 100%;
		height: 100vh;
		padding: 5%;
	}
`;

const TitleModal = styled(HeaderAddModel)`

	img {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`;

const TitleDelete = styled(TitleAddModel)`
	margin-left: 0;
`;

const WrapTextModal = styled.div`
	@media (max-width: 490px) {
		height: 30%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
	}
`;

const TextModal = styled.p`
	margin-top: 4%;
	font-size: 1rem;
	font-family: 'Overpass', Regular;
	color: #404040;
	
	strong {
		font-family: 'Overpass', Bold;
		color: #404040;
	}

	@media (max-width: 490px) {
		margin: 0;
		font-size: 1.3rem;
	}
`;

const ButtonsModal = styled.div`
	display: flex;
	width: 98%;
	margin-top: 5%;

	@media (max-width: 490px) {
		margin: 0;
		width: 100%;
	}
`;

const ButtonCancel = styled(Button)`
	color: #FF4136;
	background: #ffffff;
	margin: 5% 0 0 0;
	box-shadow: none;

	@media (max-width: 490px) {
		margin: 0;
	}
`;

const ButtonConfirm = styled(Button)`
	margin: 5% 0 0 0;

	@media (max-width: 490px) {
		margin: 0;
	}
`;

class DocumentsScreen extends Component {
	state = {
		modelsList: [
			{
				num: 1,
				title: 'Modelo Estatuto Associação',
				description: 'Documentação básica de uma associação, deve-se atentar para questões como a possibilidade de remuneração dos associados e dirigentes, tempo de mandato, organização interna etc.',
			},
			{
				num: 2,
				title: 'Modelo Estatuto para Grupo de capoeira',
				description: 'Documentação básica de uma associação, deve-se atentar para questões como a possibilidade de remuneração dos associados e dirigentes, tempo de mandato, organização interna etc. 3 Modelo Estatuto Fundação Documentação básica de uma fundação, deve-se atentar para todas as exigências legais, para as implicações relacionadas à dotação inicial de bens, além daquelas eventualmente sugeridas pelo Ministério Público. 4 Modelo Estatuto Associação Organização da Sociedade Civil de Interesse Público (OSCIP). documentação básica de associação, cumprindo as exigências da Lei nº 9.790/1999 para qualificação como OSCIP. 5 Modelo Ata Assembleia de Constituição Associação Modelo de ata de Assembleia específica para constituição de Associação, com a aprovação do estatuto e eleição dos cargos diretivos. 6 Modelo Ata Assembleia Geral Associação Modelo de ata de Assembleia Geral de Associação, que poderá ser adaptado e utilizado em diversos contextos, para qualquer pauta. 7 Modelo Registro Público Constituição Fundação Modelo de Escritura Pública de Registro de constituição de Fundação. Atentar para as exigências e rotinas dos cartórios competentes.',
			},
			{
				num: 3,
				title: 'Modelo Estatuto Fundação',
				description: 'Documentação básica de uma fundação, deve-se atentar para todas as exigências legais, para as implicações relacionadas à dotação inicial de bens, além daquelas eventualmente sugeridas pelo Ministério Público.',
			},
		],
		changeColorLabel: false,
		// options: false,
		modalDelete: false,
		addModel: false,
		download: DownloadIcon,
	};

	handleClickedLabel = (ev) => {
		ev.stopPropagation();
		this.setState({
			changeColorLabel: true,
		});
	}

	handleClickedLabelLeave = () => {
		this.setState({
			changeColorLabel: false,
		});
	}

	// handleOnOptions = () => {
	// 	this.setState({
	// 		options: true,
	// 	});
	// }

	// handleOffOptions = () => {
	// 	this.setState({
	// 		options: false,
	// 	});
	// }

		handleAddModel = () => {
			this.setState({
				addModel: true,
			});
		}

		handleCancelAddModel = () => {
			this.setState({
				addModel: false,
			});
		}

		handleModalDelete = () => {
			this.setState({
				modalDelete: true,
			});
		}

		handleCancelDelete = () => {
			this.setState({
				modalDelete: false,
			});
		}

		handleSubmit = (e) => {
			e.preventDefault();
			const { num, title, description } = this.state.modelsList;

			if (title && description !== []) {
				this.state.modelsList.push({ num, title, description });
				this.setState({
					addModel: false,
				});
			}
		}

		// handleInputFile = (e) => {
		// 	this.setState({
		// 		file: e.target.value,
		// 	});
		// }

		handleModelChange = (field, e) => {
			const { modelsList } = this.state;
			modelsList[field] = e.target.value;
			this.setState({ modelsList });
		}

		handleChangeColor = () => {
			this.setState({
				download: DownloadWhiteIcon,
			});
		}

		handleChangeColorLeave = () => {
			this.setState({
				download: DownloadIcon,
			});
		}

		render() {
			return (
				<Container onClick={this.handleClickedLabelLeave}>
					<Header />
					<ContainerHeader>
						<TitleSearch>Modelos de Documentos</TitleSearch>
						<ContainerSearch>
							<SearchText>Pesquisar</SearchText>
							<ContainerSearchInput
								onClick={this.handleClickedLabel}
								clickLabel={this.state.changeColorLabel}>
								<SearchInput
									placeholder="Digite aqui para pesquisar"
								/>
								<img src={magnifyingGlass} alt="Lupa" />
							</ContainerSearchInput>
						</ContainerSearch>
					</ContainerHeader>
					<ContainerContent>
						<ContainerAddModel>
							<AddModelImage src={ImageDocument}/>
							<Button onClick={this.handleAddModel}>Adicionar Modelo</Button>
							{this.state.addModel
							&& <ContainerModal>
								{window.innerWidth <= 490 && <Header />}
								<ModalAddModel onSubmit={this.handleSubmit}>
									<HeaderAddModel>
										<TitleAddModel>Adicionar Modelo</TitleAddModel>
										<img onClick={this.handleCancelAddModel} src={Exit} alt="Sair" />
									</HeaderAddModel>
									<ContainerInputs>
										<UploadFile htmlFor='upload-file'>
											<input id='upload-file' type="file" placeholder="Anexar Modelo"/>
											<img src={documentWhite} alt="Anexar Documento" />
											<TextUploadFile>
												<h3>Anexar Modelo</h3>
												<p>Arraste o documento para cá ou <span>Clique aqui</span></p>
											</TextUploadFile>
										</UploadFile>
										<ContainerInput>
											<TitleInputs>Nome do modelo</TitleInputs>
											<Input onChange={e => this.handleModelChange('title', e)} type="text" placeholder="Digitar nome do documento"/>
										</ContainerInput>
										<ContainerInput>
											<TitleInputs>Descrição</TitleInputs>
											<TextArea onChange={e => this.handleModelChange('description', e)} type="text" placeholder="Como esse documento é usado" />
										</ContainerInput>
									</ContainerInputs>
									<ButtonAdd type="submit">Adicionar</ButtonAdd>
								</ModalAddModel>
							</ContainerModal>}
						</ContainerAddModel>
						<Scrollbar maxHeight={'65vh'}>
							<ContainerModels>
								{this.state.modelsList.map(item => (
									<ContainerModel key={item}
										zIndex={this.state.addModel}
									// onMouseEnter={this.handleOnOptions}
									// onMouseLeave={this.handleOffOptions}
									/* contOptions={this.state.options ? 'flex' : 'none'} */>
										<ContainerModelDescription>
											<span>
												<ModelNumber>{item.num}</ModelNumber>
												<ModelTitle>{item.title}</ModelTitle>
											</span>
											<ModelParagraph>{item.description}</ModelParagraph>
										</ContainerModelDescription>
										<ContainerOptions>
											<Option onMouseEnter={this.handleChangeColor}	onMouseLeave={this.handleChangeColorLeave}>
												<OptionImage
												 src={this.state.download} alt="Download" />
												<OptionText>Exportar</OptionText>
											</Option>
											<Option onClick={this.handleModalDelete}>
												<OptionImage src={DeleteIcon} alt="Deletar" />
												<OptionText>Excluir</OptionText>
											</Option>
										</ContainerOptions>
									</ContainerModel>
								))}
								{this.state.modalDelete
								&& <ContainerModalDelete>
									<ModalDelete>
										<TitleModal>
											<TitleDelete>Excluir Modelo</TitleDelete>
											<img onClick={this.handleCancelDelete} src={Exit} alt="Sair" />
										</TitleModal>
										<WrapTextModal>
											<TextModal>
												Após ser excluido, um modelo não pode ser recuperado.
											</TextModal>
											<TextModal>
												Você deseja excluir o <strong>{this.state.modelsList.map(item => (item.title))}</strong> permanentemente?
											</TextModal>
										</WrapTextModal>
										<ButtonsModal>
											<ButtonCancel onClick={this.handleCancelDelete}>Cancelar</ButtonCancel>
											<ButtonConfirm>Confirmar</ButtonConfirm>
										</ButtonsModal>
									</ModalDelete>
								</ContainerModalDelete>}
							</ContainerModels>
						</Scrollbar>
					</ContainerContent>
				</Container>
			);
		}
}

export default DocumentsScreen;
