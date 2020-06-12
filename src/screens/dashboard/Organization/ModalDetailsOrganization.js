// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import ImageClose from '../../../assets/fechar.svg';
import ImageEdit from '../../../assets/edit.svg';
import ImageDelete from '../../../assets/delete.svg';
import ImageBackMobile from '../../../assets/setaLado.svg';

// ImageClosed
import authorizationIcon from '../../../assets/authorization.svg';
import payIcon from '../../../assets/pay.svg';
import freeIcon from '../../../assets/free.svg';
import extendDeadlineIcon from '../../../assets/extendDeadline.svg';

const mapStateToProps = state => ({
	isAdmin: state.onboarding.user.isAdmin,
	user: state.onboarding.user,
	tableDatas: state.organization.tableDatas,
});

const Overlay = styled.div`
	width: 100vw;
	min-height: 100vh;
	background-color: #707070a1;
	display: flex;
  align-items: center;
  justify-content: center;
	z-index: 20;
	position: fixed;
`;

const Container = styled.div`
	width: 70%;
	background-color: #FFFFFF;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 935px) {
		width: 95%;
		margin: 0;
	}

	@media (max-width: 648px) {
		width: 100%;
		min-height: 100vh;
		overflow-x: hidden;
		overflow-y: scroll;
	}
`;

const Figure = styled.figure`
	width: 100%;
	background-color: #FFFFFF;
	position: fixed;
	top: 0;
`;

const ImageBack = styled.img`
	display: none;

	@media (max-width: 648px) {
		display: flex;
		align-self: end;
		padding: 1rem 0 2.3rem 1rem;
	}
`;

const Content = styled.div`

	@media (max-width: 648px) {
		height: 100vh;
	}
`;

const ContentAdmin = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${props => (props.margin && '0 3.4rem')};

	@media (max-width: 935px) {
		margin: ${props => (props.margin && '0 1rem')};
	}

	@media (max-width: 648px) {
		/* height: auto; */
		margin: 0;
		flex-direction: column;
		order: 1;
	}
`;

const ContentConsultor = styled.span`
	width: 60%;
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {
		width: 100%;
		padding: 0 1rem;
		order: 2;
	}
`;

const ContentConsultorItem = styled.div`
	width: 75%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: 3.4rem;

	@media (max-width: 935px) {
		/* width: 100%; */
		flex-wrap: wrap;
		justify-content: space-between;
		margin-left: 1rem;
	}

	@media (max-width: 648px) {
		margin: 0;
	}
`;

const Title = styled.h2`
	color: #231F20;
	font-size: 1.25rem;
	font-family: Overpass, ExtraBold;
	font-weight: 900;
	padding-top: 2rem;
	padding-bottom: 1.7rem;
	margin-left: 3.4rem;
	text-transform: uppercase;

	@media (max-width: 935px) {
		margin-left: 1rem;
	}
	@media (max-width: 648px) {
		margin: 0;
	}
`;

const SubTitle = styled.p`
  color: #85144B;
	font-size: 0.75rem;
	font-family: Overpass, Bold;
	font-weight: 600;
  text-transform: uppercase;
`;

const SubAnswer = styled.p`
	color: #231F20;
	font-size: 0.9rem;
	font-family: "Overpass", Light;
	margin: 0.5rem 0 1rem 0;
	word-break: break-word;
	width: ${props => (props.fantasyName && '90%')};
`;

const ContentCreate = styled.div`
 	width: ${props => (props.width ? '35%' : '45%')};
  color: #85144B;
	padding: ${props => (props.padding ? '0 0 2rem 3rem' : '0 0 2rem 2.5rem')};
	padding: 0 0 2rem 3rem;
  border-left: 1px solid;
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		width: 40%;
}

	@media (max-width: 648px) {
		width: 100%;
		border-left: 0;
		border-bottom: 1px solid;
		flex-direction: row;
		padding: 0 1rem;
		order: 1;
}
`;

const ImageClosed = styled.img`
	display: flex;
	align-self: flex-end;
	padding: 0.8rem 0.8rem 0;
	cursor: pointer;

	@media (max-width: 648px) {
		display: none;
	}
`;

const ContainerOrganization = styled.section`
	background-color: #FFCFCD;
	display: flex;
	flex-direction: column;
	padding-bottom: 1.5rem;

	@media (max-width: 648px) {
		padding: ${props => (props.padding ? '0 0 2rem 1rem' : '0 0 4rem 1rem')};
		order: 3;
	}
`;

const ContentOrganization = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${props => (props.margin && '0 3.4rem')};
	/* padding: 0 0 2rem; */

	@media (max-width: 935px) {
		margin: ${props => (props.margin && '0 1rem')};
	}

	@media (max-width: 648px) {
		flex-direction: column;
		margin: 0;
		order: 4;
	}
`;

const ContentOrganizationMobile = styled.div`
	display: flex;
	flex-direction: row;
	padding-bottom: 1rem;
`;

const ContentConsultorDetails = styled.div`
	display: flex;
	flex-direction: row;

	 @media (max-width: 648px) {
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		margin: 5rem 0 0;
	}
`;

const ContentSubTitle = styled.div`
	width: 55%;

	@media (max-width: 648px) {
		width: 100%;
		display: flex;
		flex-direction: row;
    justify-content: space-between;
	}
`;

const ContainerEdit = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {
		display: none;
	}
`;

const SpanContainer = styled.span`
	display: flex;
	flex-direction: row;
	margin-bottom: 0.5rem;
	cursor: pointer;
`;

const ImageEdite = styled.img`
	display: flex;
  flex-direction: row;
	margin-right: 0.3rem;
`;

const ContainerOption = styled.p`
	color: #85144B;
	font-size: 1.3rem;
	font-family: Overpass, Regular;
	display: flex;
  align-items: center;
	padding-top: 0.5rem;
	margin-left: 0.3rem;
`;

const ContainerOptionDelete = styled.p`
	color: #85144B;
	font-size: 1.3rem;
	font-family: Overpass, Regular;
	display: flex;
  align-items: center;
	padding-top: 0.5rem;
	margin-left: 1rem;
	cursor: pointer;
`;

const Separation = styled.div`
	@media (max-width: 648px) {
		display: none;
	}
`;

const SeparationMobile = styled.div`
	display: none;
	@media (max-width: 648px) {
		width: 56%;
		height: 39vh;
		display: flex;
		flex-direction: column;
	}
`;

const ContainerSelected = styled.div`
	display: none;

	@media (max-width: 648px) {
		width: 100%;
		display: flex;
		justify-content: center;
		justify-content: space-evenly;
		background-color: #FFFFFF;
		bottom: 0;
		align-items: center;
		position: fixed;
 	}
`;

const ContainerEditImage = styled.div`
	display: none;
	@media (max-width: 648px) {
		width: 100%;
		padding: 1rem 0 1rem;
		display: flex;
		justify-content: center;
		justify-content: space-evenly;
		background-color: #FFFFFF;
		bottom: 0;
		position: fixed;
		cursor: pointer;
	}
`;

const SpanContainerImage = styled.div`
	display: flex;
	flex-direction: row;
	cursor: pointer;
`;

const ContainerOptionMobile = styled.p`
	color: #85144B;
	font-size: 1.2rem;
	font-family: Overpass, Regular;
	display: flex;
  align-items: center;
	padding-top: 0.3rem;
	margin-left: 1rem;
	cursor: pointer;
`;

class ModalDetailsOrganization extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paymentMethodList: [
				{
					img: authorizationIcon,
					desc: 'Autorizar',
				},
				{
					img: payIcon,
					desc: 'Pago',
				},
				{
					img: freeIcon,
					desc: 'Isento',
				},
				{
					img: extendDeadlineIcon,
					desc: 'Prorrogar',
				},
			],
		};
	}

	handleClicked = (item) => {
		this.setState({
			selectedStatus: item.desc,
		});
	};

	renderAuthorizedData = (date) => {
		const authorizedDate = new Date(date);
		const formatDate = `${authorizedDate.getDate() > 9 ? authorizedDate.getDate() : `0${authorizedDate.getDate()}`}/${authorizedDate.getMonth() + 1 > 9 ? authorizedDate.getMonth() + 1 : `0${authorizedDate.getMonth() + 1}`}/${authorizedDate.getFullYear()}`

		return `${date === null ? '-' : formatDate}`;
	}

	render() {
		const { org, user, isAdmin } = this.props;

		return (
			<Overlay onClick={this.props.handleClosedModal}>
				<Container onClick={ev => ev.stopPropagation()}>
					<Figure>
						<ImageBack src={ImageBackMobile} onClick={this.props.handleClosedModal} />
					</Figure>
					<Content>
						<ContentAdmin>
							<ContentConsultor>
								<Title>consultor</Title>
								<ContentConsultorItem>
									<div>
										<SubTitle>nome</SubTitle>
										<SubAnswer>{isAdmin ? org.name : user.name}</SubAnswer>
										<SubTitle>cpf</SubTitle>
										<SubAnswer>{isAdmin ? org.cpf : user.cpf}</SubAnswer>
									</div>
									<div>
										<SubTitle>e-mail</SubTitle>
										<SubAnswer> {isAdmin ? org.email : user.email}</SubAnswer>
										<SubTitle>telefone</SubTitle>
										<SubAnswer>{isAdmin ? org.telephone : user.telephone}</SubAnswer>
									</div>
								</ContentConsultorItem>
							</ContentConsultor>
							<ContentCreate
								width={this.props.isAdmin}
								padding={this.props.isAdmin}>
								<ImageClosed src={ImageClose} alt="Fechar" onClick={this.props.handleClosedModal} />
								<ContentConsultorDetails>
									<ContentSubTitle>
										<div>
											<SubTitle>criado em</SubTitle>
											<SubAnswer>{org.createdIn || '-'}</SubAnswer>
										</div>
										<div>
											<SubTitle>autorizado em</SubTitle>
											<SubAnswer>{this.renderAuthorizedData(org.authorization) || '-'}</SubAnswer>
										</div>
										<div>
											<SubTitle>vencimento</SubTitle>
											<SubAnswer>{org.dueDate || '-'}</SubAnswer>
										</div>
									</ContentSubTitle>
									{!this.props.isAdmin
									&&	<ContainerEdit>
										<SpanContainer onClick={() => this.props.isModalCreateOrganization('edit')}>
											<ImageEdite src={ImageEdit}/>
											<ContainerOption>Editar</ContainerOption>
										</SpanContainer>
										<SpanContainer onClick={this.props.handleDeleteModal}>
											<img src={ImageDelete} alt="delete icon"/>
											<ContainerOptionDelete>Excluir</ContainerOptionDelete>
										</SpanContainer>
									</ContainerEdit>
									}
								</ContentConsultorDetails>
							</ContentCreate>
						</ContentAdmin>
						<ContainerOrganization padding={this.props.isAdmin}>
							<Title>organização</Title>
							<ContentOrganization margin>
								<Separation>
									<SubTitle>nome fantasia</SubTitle>
									<SubAnswer fantasyName>{org.tradingName || '-'}</SubAnswer>
									<SubTitle>razão social</SubTitle>
									<SubAnswer>{org.companyName || '-'}</SubAnswer>
								</Separation>
								<Separation>
									<SubTitle>cnpj</SubTitle>
									<SubAnswer>{org.cnpj || '-'}</SubAnswer>
									<SubTitle>telefone</SubTitle>
									<SubAnswer>{org.telephone || '-'}</SubAnswer>
								</Separation>
								<Separation>
									<SubTitle>endereço</SubTitle>
									<SubAnswer>{org.address || '-'}</SubAnswer>
									<SubTitle>cep</SubTitle>
									<SubAnswer>{org.cep || '-'}</SubAnswer>
								</Separation>
								<Separation>
									<SubTitle>complemento</SubTitle>
									<SubAnswer>{org.addressComplement || '-'}</SubAnswer>
									<SubTitle>bairro</SubTitle>
									<SubAnswer>{org.neighborhood || '-'}</SubAnswer>
								</Separation>
								<Separation>
									<SubTitle>cidade</SubTitle>
									<SubAnswer>{org.city || '-'}</SubAnswer>
								</Separation>
								<ContentOrganizationMobile>
									<SeparationMobile>
										<SubTitle>nome fantasia</SubTitle>
										<SubAnswer>{org.tradingName || '-'}</SubAnswer>
										<SubTitle>cnpj</SubTitle>
										<SubAnswer>{org.cnpj || '-'}</SubAnswer>
										<SubTitle>complemento</SubTitle>
										<SubAnswer>{org.addressComplement || '-'}</SubAnswer>
										<SubTitle>bairro</SubTitle>
										<SubAnswer>{org.neighborhood || '-'}</SubAnswer>
										<SubTitle>cidade</SubTitle>
										<SubAnswer>{org.city || '-'}</SubAnswer>
									</SeparationMobile>
									<SeparationMobile>
										<SubTitle>razão social</SubTitle>
										<SubAnswer>{org.companyName || '-'}</SubAnswer>
										<SubTitle>telefone</SubTitle>
										<SubAnswer>{org.telephone || '-'}</SubAnswer>
										<SubTitle>endereço</SubTitle>
										<SubAnswer>{org.address || '-'}</SubAnswer>
										<SubTitle>cep</SubTitle>
										<SubAnswer>{org.cep || '-'}</SubAnswer>
									</SeparationMobile>
								</ContentOrganizationMobile>
							</ContentOrganization>
						</ContainerOrganization>
					</Content>
					<ContainerSelected>
						{!this.props.isAdmin && <ContainerEditImage>
							<SpanContainerImage onClick={() => this.props.isModalCreateOrganization('edit')}>
								<ImageEdite src={ImageEdit} />
								<ContainerOptionMobile>Editar</ContainerOptionMobile>
							</SpanContainerImage>
							<SpanContainerImage onClick={this.props.handleDeleteModal}>
								<img src={ImageDelete} alt="delete icon" />
								<ContainerOptionMobile>Excluir</ContainerOptionMobile>
							</SpanContainerImage>
						</ContainerEditImage>
						}
					</ContainerSelected>
				</Container>
			</Overlay>
		);
	}
}

export default connect(mapStateToProps, null)(ModalDetailsOrganization);
