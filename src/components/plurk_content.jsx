import React, { Component } from "react";

class PlurkContent extends Component {
    state = {};
    getVolumeIcon(){
        return 'icon-volume-' + (this.props.plurk.anonymous ? 'off' : '2');
    }
    

    render() {
        const {user, plurk, onMute} = this.props;
        console.log("render");
        return (
            <div style={{backgroundColor: "white"}}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <span>
                                        <a href="">{user.display_name}</a>
                                        <span>
                                            {plurk.qualifier_translated}
                                        </span>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div>{plurk.content}</div>
                                <div className="manager">
                                    <a className={this.getVolumeIcon(plurk.anonymous)} onClick={() => onMute(plurk)}></a>
                                    <a className='icon-refresh'></a>
                                    <a className='icon-heart'></a>
                                    <a className='icon-star'></a>
                                    <a className='icon-arrow-down'></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PlurkContent;
