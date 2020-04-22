import React, { Component } from 'react';
import './HostFilters.css';
import { translate } from '../../helpers/language';
import Checkbox from '../widgets/Checkbox.jsx';

class HostFilters extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('shouldComponentUpdate', nextProps, nextState);
    const propsToCauseRender = [
      'hideFilters',
      'hostSortOrder',
      'howManyHostDown',
      'howManyHostDown',
      'howManyHostUnreachable',
      'howManyHostPending',
      'howManyHostAcked',
      'howManyHostScheduled',
      'howManyHostFlapping'
    ];
    for(let i=0;i<propsToCauseRender.length;i++) {
      if (nextProps[propsToCauseRender[i]] !== this.props[propsToCauseRender[i]]) {
        return true;
      }
    }
    return false;
  }

  render() {
    
    const language = this.props.language;

    return (
      <div className="sort-and-filter">

        {!this.props.hideFilters && <select value={this.props.hostSortOrder} varname={'hostSortOrder'} onChange={this.props.handleSelectChange}>
          <option value="newest">{translate('newest first', language)}</option>
          <option value="oldest">{translate('oldest first', language)}</option>
        </select>}

        {(!this.props.hideFilters || this.props.howManyHostDown !== 0) && <Checkbox className={this.props.howManyHostDown ? 'Checkbox down uppercase' : 'Checkbox down uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideHostDown'}
          defaultChecked={!this.props.settingsObject.hideHostDown}
          howMany={this.props.howManyHostDown}
          howManyText={translate('down', language)}
        />}

        {(!this.props.hideFilters || this.props.howManyHostUnreachable !== 0) && <Checkbox className={this.props.howManyHostUnreachable ? 'Checkbox unreachable uppercase' : 'Checkbox unreachable uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideHostUnreachable'}
          defaultChecked={!this.props.settingsObject.hideHostUnreachable}
          howMany={this.props.howManyHostUnreachable}
          howManyText={translate('unreachable', language)}
        />}

        {(!this.props.hideFilters || this.props.howManyHostPending !== 0) && <Checkbox className={this.props.howManyHostPending ? 'Checkbox pending uppercase' : 'Checkbox pending uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideHostPending'}
          defaultChecked={!this.props.settingsObject.hideHostPending}
          howMany={this.props.howManyHostPending}
          howManyText={translate('pending', language)}
        />}

        {(!this.props.hideFilters || this.props.howManyHostAcked !== 0) && <Checkbox className={this.props.howManyHostAcked ? 'Checkbox acked uppercase' : 'Checkbox acked uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideHostAcked'}
          defaultChecked={!this.props.settingsObject.hideHostAcked}
          howMany={this.props.howManyHostAcked}
          howManyText={translate('acked', language)}
        />}

        {(!this.props.hideFilters || this.props.howManyHostScheduled !== 0) && <Checkbox className={this.props.howManyHostScheduled ? 'Checkbox scheduled uppercase' : 'Checkbox scheduled uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideHostScheduled'}
          defaultChecked={!this.props.settingsObject.hideHostScheduled}
          howMany={this.props.howManyHostScheduled}
          howManyText={translate('scheduled', language)}
        />}

        {(!this.props.hideFilters || this.props.howManyHostFlapping !== 0) && <Checkbox className={this.props.howManyHostFlapping ? 'Checkbox flapping uppercase' : 'Checkbox flapping uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideHostFlapping'}
          defaultChecked={!this.props.settingsObject.hideHostFlapping}
          howMany={this.props.howManyHostFlapping}
          howManyText={translate('flapping', language)}
        />}

        {(!this.props.hideFilters || this.props.howManyHostSoft !== 0) && <Checkbox className={this.props.howManyHostSoft ? 'Checkbox soft uppercase' : 'Checkbox soft uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideHostSoft'}
          defaultChecked={!this.props.settingsObject.hideHostSoft}
          howMany={this.props.howManyHostSoft}
          howManyText={translate('soft', language)}
        />}

      </div>
    );
  }
}

export default HostFilters;