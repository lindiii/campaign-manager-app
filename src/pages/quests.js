import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Panel,
  Image,
  FormGroup,
  InputGroup,
  Glyphicon,
  FormControl,
  Grid,
  Button
} from 'react-bootstrap';

class QuestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      formattedQuests: {}
    };
  }

  filteredQuestKeys = () => {
    const { searchTerm } = this.state;
    const { quests, tags, notes } = this.props;
    const doesInclude = (object, stateKey) => {
      return (
        object &&
        object[stateKey].toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
    const includesRelated = object => {
      return (
        object.tagIds.find(tagId =>
          tags[tagId].name.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        object.noteIds.find(
          noteId =>
            notes[noteId].title
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            notes[noteId].description
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )
      );
    };
    return Object.keys(quests).filter(
      questId =>
        doesInclude(quests[questId], 'name') ||
        doesInclude(quests[questId], 'description') ||
        doesInclude(quests[questId], 'rewards') ||
        doesInclude(quests[questId], 'status') ||
        quests[questId].objectives
          .map(x => x.name.toLowerCase())
          .includes(searchTerm.toLowerCase()) ||
        includesRelated(quests[questId])
    );
  };

  formatQuests = props => {
    const { quests, currentCampaign } = props;
    const questKeys = this.filteredQuestKeys();
    const foundQuests = {};
    questKeys.forEach(questKey => {
      if (quests[questKey].campaignIds.includes(currentCampaign.id)) {
        foundQuests[questKey] = quests[questKey];
      }
    });
    return foundQuests;
  };

  componentDidMount() {
    this.setState({ formattedQuests: this.formatQuests(this.props) });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.quests !== this.props.quests) {
      this.setState({ formattedQuests: this.formatQuests(nextProps) });
    }
  }

  renderQuests() {
    const { currentCampaign } = this.props;
    const { formattedQuests } = this.state;
    return Object.keys(formattedQuests).map(key => {
      const quest = formattedQuests[key];
      let url = quest.images[0]
        ? quest.images[0].downloadUrl
        : require('../assets/placeholder-quest.png');
      const questRoute = `/campaigns/${currentCampaign.id}/home/quests/${
        quest.id
      }`;
      return (
        <Col key={key} xs={4} md={3}>
          <Panel
            bsStyle="info"
            className="quest-card clickable"
            onClick={() => this.props.history.push(questRoute)}
          >
            <Panel.Heading>
              <Panel.Title componentClass="h3">{quest.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body className="padding-0">
              <Image src={url} className="place-image" />
            </Panel.Body>
          </Panel>
        </Col>
      );
    });
  }

  onSearch = e => {
    this.setState({ searchTerm: e.target.value }, () => {
      this.setState({ formattedQuests: this.formatQuests(this.props) });
    });
  };

  render() {
    const { currentCampaign } = this.props;
    const { searchTerm } = this.state;
    const createQuestRoute = `/campaigns/${currentCampaign.id}/home/quests/new`;

    return (
      <Grid>
        <Row className="margin-bottom-1">
          <Col xsOffset={4} xs={6}>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon
                  style={{ paddingRight: '25px', paddingTop: '10px' }}
                >
                  <Glyphicon glyph="search" />
                </InputGroup.Addon>
                <FormControl
                  type="text"
                  onChange={this.onSearch}
                  value={searchTerm}
                  placeholder="Search for tags, keywords, etc."
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={2}>
            <Button onClick={() => this.props.history.push(createQuestRoute)}>
              Create
            </Button>
          </Col>
        </Row>
        <Row>{this.renderQuests()}</Row>
      </Grid>
    );
  }
}

QuestPage.defaultProps = {};
QuestPage.propTypes = {};
const mapStateToProps = state => ({
  quests: state.quests.all,
  tags: state.tags.all,
  notes: state.notes.all,
  currentCampaign: state.campaigns.currentCampaign
});

export default connect(
  mapStateToProps,
  null
)(QuestPage);
