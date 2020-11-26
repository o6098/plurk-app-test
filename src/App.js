import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Timeline from "./components/timeline";
import Dashboard from "./components/dashboard";

class App extends Component {

    state = {
        plurk_contents: {
            plurk_users: 
                {
                    11604460: {
                        avatar: 8,
                        background_id: 0,
                        bday_privacy: 1,
                        date_of_birth: "Fri, 01 Jan 1904 00:01:01 GMT",
                        dateformat: 0,
                        default_lang: "tr_ch",
                        display_name: "Plurk",
                        friend_list_privacy: "public",
                        full_name: "Plurk",
                        gender: 2,
                        has_profile_image: 1,
                        id: 11604460,
                        karma: 100,
                        location: "Taipei, Taiwan",
                        name_color: null,
                        nick_name: "plurk",
                        phone_verified: null,
                        pinned_plurk_id: null,
                        premium: true,
                        show_ads: true,
                        show_location: 1,
                        timeline_privacy: 0,
                        timezone: "Asia/Taipei",
                        verified_account: false,
                    },
                    15021399: {
                        avatar: null,
                        background_id: 0,
                        bday_privacy: 1,
                        date_of_birth: "Fri, 11 Mar 1904 00:01:01 GMT",
                        dateformat: 0,
                        default_lang: "tr_ch",
                        display_name: "RobotTestt",
                        friend_list_privacy: "public",
                        full_name: "RobotTestt",
                        gender: 2,
                        has_profile_image: 0,
                        id: 15021399,
                        karma: 0,
                        location: "Taoyuan District, Taiwan",
                        name_color: null,
                        nick_name: "RobotTestt",
                        phone_verified: null,
                        pinned_plurk_id: null,
                        premium: false,
                        show_ads: true,
                        show_location: 1,
                        timeline_privacy: 0,
                        timezone: null,
                        verified_account: false,
                    },
                },
            
            plurks: [
                {
                    anonymous: false,
                    bookmark: false,
                    coins: 0,
                    content: "API測試3",
                    content_raw: "API測試3",
                    excluded: null,
                    favorers: [],
                    favorite: false,
                    favorite_count: 0,
                    has_gift: false,
                    is_unread: 0,
                    lang: "en",
                    last_edited: null,
                    limited_to: "|15021399|",
                    mentioned: 0,
                    no_comments: 0,
                    owner_id: 15021399,
                    plurk_id: 1457448352,
                    plurk_type: 1,
                    porn: false,
                    posted: "Mon, 23 Nov 2020 02:10:39 GMT",
                    publish_to_followers: true,
                    qualifier: ":",
                    qualifier_translated: "",
                    replurkable: false,
                    replurked: false,
                    replurker_id: null,
                    replurkers: [],
                    replurkers_count: 0,
                    responded: 0,
                    response_count: 0,
                    responses_seen: 0,
                    user_id: 15021399
                },
                {
                    anonymous: false,
                    bookmark: false,
                    coins: 0,
                    content:
                        "唷！歡迎回來噗浪！您好像有陣子沒回來了，所以我們正在把您的河道塞滿最新的噗。這可能會花個幾分鐘，請不要轉台，等會兒就可以看到最近有什麼新鮮事了！",
                    content_raw:
                        "唷！歡迎回來噗浪！您好像有陣子沒回來了，所以我們正在把您的河道塞滿最新的噗。這可能會花個幾分鐘，請不要轉台，等會兒就可以看到最近有什麼新鮮事了！",
                    excluded: null,
                    favorers: [],
                    favorite: false,
                    favorite_count: 0,
                    has_gift: false,
                    is_unread: 0,
                    lang: "en",
                    last_edited: null,
                    limited_to: "|15021399||11604460|",
                    mentioned: 0,
                    no_comments: 0,
                    owner_id: 11604460,
                    plurk_id: 1457447174,
                    plurk_type: 1,
                    porn: false,
                    posted: "Mon, 23 Nov 2020 01:49:54 GMT",
                    publish_to_followers: true,
                    qualifier: "",
                    replurkable: false,
                    replurked: false,
                    replurker_id: null,
                    replurkers: [],
                    replurkers_count: 0,
                    responded: 0,
                    response_count: 0,
                    responses_seen: 0,
                    user_id: 15021399
                }
            ]
        }
    };

    clickMute(plurk){
      const plurk_contents = {...this.state.plurk_contents};
      const plurks = [...plurk_contents.plurks];
      const index = plurks.indexOf(plurk);
      plurks[index] = {...plurk};
      plurks[index].anonymous = !plurks[index].anonymous;
      plurk_contents.plurks = plurks;
      this.setState({plurk_contents});
    }

    render() {
      
        return (
            <div style={{height: '100%'}}>
                <Navbar />
                <Timeline plurk_contents={this.state.plurk_contents} onMute={this.clickMute.bind(this)}/>
                <Dashboard />
            </div>
        );
    }
}

export default App;
