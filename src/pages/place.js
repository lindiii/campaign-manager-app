import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Grid,
  Row,
  Col,
  PanelGroup,
  Panel,
  Carousel,
  Image,
  Tab,
  NavItem,
  Nav,
  Glyphicon,
  Modal,
  Button
} from 'react-bootstrap';
import Floors from './floors';
import PlaceForm from '../forms/places-form';
import Notes from './notes';
import * as PlaceActions from '../redux/actions/places';

class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {},
      numRows: 1,
      numCols: 1,
      numFloors: 1,
      placeFormOpen: false
    };
    this.findRelatedObjects = this.findRelatedObjects.bind(this);
    this.renderLocationHistory = this.renderLocationHistory.bind(this);
    this.handlePlaceDelete = this.handlePlaceDelete.bind(this);
    this.renderImages = this.renderImages.bind(this);
    this.renderFloors = this.renderFloors.bind(this);
    this.renderPlaces = this.renderPlaces.bind(this);
    this.getPlaceImage = this.getPlaceImage.bind(this);
  }

  findRelatedObjects = () => {
    return false;
  };

  componentWillMount = () => {
    const placeId = this.props.match.params.place_id;
    this.setState({ place: this.props.places[placeId] }, () => {
      this.findRelatedObjects(this.props);
    });
  };

  componentWillReceiveProps = nextProps => {
    const placeId = nextProps.match.params.place_id;
    const oldPlaceId = this.props.match.params.place_id;
    const foundPlace = nextProps.places[placeId];
    if (this.props.places !== nextProps.places || placeId !== oldPlaceId) {
      this.setState({ place: foundPlace }, () => {
        this.findRelatedObjects(nextProps);
      });
    }
    this.findRelatedObjects(nextProps);
  };

  handlePlaceDelete = place => {
    const { deletePlace, history } = this.props;
    deletePlace(place);
    history.goBack();
  };

  renderLocationHistory = () => {
    const { place } = this.state;

    return (
      <Tab.Pane eventKey="location-history">
        <PanelGroup
          accordion
          id={'history-whatever'}
          defaultActiveKey="locationPanel"
        >
          <Panel
            id={'place-panel-location'}
            bsStyle="warning"
            eventKey="locationPanel"
          >
            <Panel.Heading>
              <Panel.Toggle style={{ textDecoration: 'none' }}>
                <Panel.Title componentClass="h3">Location</Panel.Title>
              </Panel.Toggle>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <p>{place.location}</p>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
          <Panel
            id={'place-panel-history'}
            bsStyle="warning"
            eventKey="historyPanel"
          >
            <Panel.Heading>
              <Panel.Toggle style={{ textDecoration: 'none' }}>
                <Panel.Title componentClass="h3">History</Panel.Title>
              </Panel.Toggle>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <p>{place.history}</p>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
          <Panel
            id={'place-panel-outside'}
            bsStyle="warning"
            eventKey="outsidePanel"
          >
            <Panel.Heading>
              <Panel.Toggle style={{ textDecoration: 'none' }}>
                <Panel.Title componentClass="h3">Outside</Panel.Title>
              </Panel.Toggle>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <p>{place.outsideDescription}</p>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
          <Panel
            id={'place-panel-inside'}
            bsStyle="warning"
            eventKey="insidePanel"
          >
            <Panel.Heading>
              <Panel.Toggle style={{ textDecoration: 'none' }}>
                <Panel.Title componentClass="h3">Inside</Panel.Title>
              </Panel.Toggle>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <p>{place.insideDescription}</p>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </PanelGroup>
      </Tab.Pane>
    );
  };

  renderImages = () => {
    const { place } = this.state;

    return (
      <Tab.Pane eventKey="images">
        <Carousel interval={null}>
          {place.images &&
            place.images.map(image => {
              return (
                <Carousel.Item key={`place-image-${image.fileName}`}>
                  <Image src={image.downloadUrl} responsive />
                </Carousel.Item>
              );
            })}
        </Carousel>
      </Tab.Pane>
    );
  };

  renderAttachedFiles = () => {
    const { place } = this.state;
    return (
      <Tab.Pane eventKey="attachedFiles">
        {place.attachedFiles &&
          place.attachedFiles.map(file => {
            return (
              <div key={`${file.fileName}-${file.downloadUrl}`}>
                <a href="#" onClick={() => window.open(file.downloadUrl)}>
                  {file.fileName}
                </a>
              </div>
            );
          })}
      </Tab.Pane>
    );
  };

  getPlaceImage = place => {
    if (place.images.length) {
      return place.images[0].downloadUrl;
    }
    return require('../assets/placeholder-location.png');
  };

  renderPlaces = () => {
    const { place } = this.state;
    const { places, currentCampaign, history } = this.props;
    return (
      <Tab.Pane eventKey="places">
        <Row>
          <h3>Related Places</h3>
        </Row>
        <Row>
          {!place.placeIds.length && (
            <div>
              You have no related places. Please add some to see them here.
            </div>
          )}
          {place.placeIds.map(placeKey => {
            const foundPlace = places[placeKey];
            const placeRoute = `/campaigns/${
              currentCampaign.id
            }/home/places/${placeKey}`;
            if (foundPlace)
              return (
                <Col xs={4} key={`place-${placeKey}`}>
                  <Panel
                    bsStyle="warning"
                    className="place-card clickable"
                    onClick={() => history.push(placeRoute)}
                  >
                    <Panel.Heading>
                      <Panel.Title componentClass="h3">
                        {foundPlace.name}
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body className="padding-0">
                      <Image
                        src={this.getPlaceImage(foundPlace)}
                        className="place-image"
                      />
                    </Panel.Body>
                  </Panel>
                </Col>
              );
          })}
        </Row>
      </Tab.Pane>
    );
  };

  renderFloors = () => {
    const { place } = this.state;
    return (
      <Tab.Pane eventKey="floors">
        <Floors place={place} />
      </Tab.Pane>
    );
  };

  renderNotes = () => {
    const { place } = this.state;
    return (
      <Tab.Pane eventKey="notes">
        <Notes noteIds={place.noteIds} typeId={place.id} type="place" />
      </Tab.Pane>
    );
  };

  renderPlaceForm = () => {
    const { place } = this.state;
    return (
      <Modal
        show={this.state.placeFormOpen}
        onHide={this.hidePlaceForm}
        bsSize="lg"
        aria-labelledby="place-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="place-modal-title-lg">Modify Place</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlaceForm
            place={place}
            onCancel={this.hidePlaceForm}
            onSubmit={this.hidePlaceForm}
            formAction={'edit'}
          />
        </Modal.Body>
      </Modal>
    );
  };

  showPlaceForm = e => {
    e.preventDefault();
    this.setState({ placeFormOpen: true });
  };

  hidePlaceForm = () => {
    this.setState({ placeFormOpen: false });
  };

  renderPills = () => {
    return (
      <Nav bsStyle="pills" className="margin-left-0">
        <NavItem eventKey="images">
          <Glyphicon glyph="picture" />
        </NavItem>
        <NavItem eventKey="location-history">
          <Glyphicon glyph="book" />
        </NavItem>
        <NavItem eventKey="floors">
          <Glyphicon glyph="th-large" />
        </NavItem>
        <NavItem eventKey="notes">
          <Glyphicon glyph="comment" />
        </NavItem>
        <NavItem eventKey="places">
          <Glyphicon glyph="globe" />
        </NavItem>
        <NavItem eventKey="attachedFiles">
          <Glyphicon glyph="duplicate" />
        </NavItem>
      </Nav>
    );
  };

  render() {
    const { place } = this.state;
    if (!place) return null;
    return (
      <Grid>
        {this.renderPlaceForm()}
        <Row>
          <Col xs={12}>
            <Panel bsStyle="info">
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  {place.name}
                  <Button
                    className="margin-left-1 vert-text-top"
                    bsSize="small"
                    bsStyle="warning"
                    onClick={this.showPlaceForm}
                  >
                    <Glyphicon glyph="pencil" />
                  </Button>
                  <Button
                    className="margin-left-1 vert-text-top"
                    bsSize="small"
                    bsStyle="danger"
                    onClick={() => this.handlePlaceDelete(place)}
                  >
                    <Glyphicon glyph="trash" />
                  </Button>
                </Panel.Title>
              </Panel.Heading>
              <Tab.Container id="place-tabs" defaultActiveKey="images">
                <Panel.Body>
                  <Row>
                    <Col xs={1}>{this.renderPills()}</Col>
                    <Col
                      xs={10}
                      style={{ maxHeight: '500px', overflowY: 'scroll' }}
                    >
                      <Tab.Content animation>
                        {this.renderImages()}
                        {this.renderLocationHistory()}
                        {this.renderFloors()}
                        {this.renderNotes()}
                        {this.renderAttachedFiles()}
                        {this.renderPlaces()}
                      </Tab.Content>
                    </Col>
                  </Row>
                </Panel.Body>
              </Tab.Container>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Place.defaultProps = {};
Place.propTypes = {};
const mapStateToProps = state => ({
  places: state.places.all,
  currentCampaign: state.campaigns.currentCampaign
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deletePlace: PlaceActions.deletePlace
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
