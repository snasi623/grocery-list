import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab/Tab.jsx';

class TabList extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        }
    }

    onClickTab = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTab,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <ol className="tabList">
                    {children.map((child) => {
                        const { label } = child.props;
                        return (
                            <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTab}/>
                        );
                    })}
                </ol>
                <div className="tabContent">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default TabList;
