//  ------------------------------------------------------------------
//  book.js
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config = {
	background: {
		color: "#ababab",
		url: "images/circles-background.png"
	},
	audio: {
		enabled: true,
		path: "http://www.williammalone.com/public/",
		name: "001"	
	},
	book: {
		font: "Georgia",
		startOnPage: 0,
		pageWidth: 768,
		pageHeight: 1024,
		previousPageButton: {
			url: "images/prev-page-button.png",
			x: 1,
			y: 50,
			width: "50px",
			height: "50px"
		},
		nextPageButton: {
			url: "images/next-page-button.png",
			horizontalAlign: "RIGHT",
			x: 1,
			y: 50,
			width: "50px",
			height: "50px"
		},
		pageBackground: {
			color: "#fefefe"
		},
		oddPageBackground: {
			color: "#fdfdfd"
		},
		evenPageBackground: {
			color: "#f9f9f9"
		},
		pageTurnDuration: 500,
		pageSlideDuration: 200
	},
	cover: {
		background: {
			color: "#FF0000"
		},
		content: [
			{
				type: "TextArea",
				x: 0,
				y: 25,
				align: "center",
				color: "#222222",
				size: 48,
				font: "Droid Serif",
				text: "Knight Attack!"
			},
			{
				type: "Sprite",
				x: 25,
				y: 40,
				width: 20,
				height: 20,
				numFrames: 10,
				frameDelay: 5,
				loop: true,
				url: "images/knight_atk.png"
			},
			{
				type: "Sprite",
				x: 50,
				y: 40,
				width: 20,
				height: 20,
				numFrames: 10,
				frameDelay: 5,
				loop: true,
				url: "images/knight_jumpatk.png"
			}
		]
	},
	pages: []
};
