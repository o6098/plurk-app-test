import React, { Component } from "react";
import PlurkContent from "./plurk_content";

class Plurk extends Component {
    getAvatarSrc(user) {
        console.log(user);
        if (user.has_profile_image === 0)
            return "https://www.plurk.com/static/default_small.gif";
        else if (user.avatar == null)
            return "https://avatars.plurk.com/" + user.id + "-small.gif";
        else
            return (
                "https://avatars.plurk.com/" +
                user.id +
                "-small" +
                user.avatar +
                ".gif"
            );
    }

    render() {
        const { plurk, user, top, left } = this.props;
        console.log(left);
        const plurkStyle = {
            width: "430px",
            height: "70px",
            top: top + "%",
            left: left + 'px'
        };
        console.log(plurk);
        return (
            <div style={plurkStyle} className="plurk">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div style={{ width: 20, height: 20 }}>
                                    <a href="">
                                        <img
                                            src={this.getAvatarSrc(user)}
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </td>
                            <td>
                                <PlurkContent plurk={plurk} user={user} onMute={this.props.onMute}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Plurk;
