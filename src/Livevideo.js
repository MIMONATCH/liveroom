import React, { Component } from 'react'
import ReactFlowPlayer from 'react-flow-player'

class Livevideo extends Component{
	constructor(props){
		super(props);
		//这里的url指向的是流媒体服务器
		this.state = {
			srcurl: 'http://live.xiaoblogs.cn:81/abcd/abcd.m3u8',
			type: "application/x-mpegurl",
			ID: 'reactflowplayer',
			initScript: 'https://releases.flowplayer.org/7.2.7/flowplayer.min.js',
			HlsUrl: 'https://cdn.jsdelivr.net/npm/hls.js@0.11.0/dist/hls.light.min.js',
			StyleUrl: 'https://releases.flowplayer.org/7.2.7/skin/skin.css',
			AspectRatio: '9/16'
		};
	}
	render(){
		console.log(this.state.initScript);
		return(
			<ReactFlowPlayer
				playerInitScript={this.state.initScript}
				playerId={this.state.ID}
				hlsUrl={this.state.HlsUrl}
				hlsPlugin={true}
				live={true}
				styleUrl={this.state.StyleUrl}
				sources={[
					{
						type: this.state.type,
						src: this.state.srcurl
					}
				]}
			/>
		);
	}
}

export default Livevideo