const http=require('http');

http.createServer((req,res)=>{

res.setHeader('Content-Type', 'application/json');
console.log("h");

    res.end(JSON.stringify({
        total: 1000,
        results: [{
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        },
        {
            id: "422028",
            title: "Joker",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "https://specials-images.forbesimg.com/imageserve/5d97693467dd830006a2b59c/960x0.jpg?fit=scale",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }, {
            id: "422028",
            title: "Bad boys",
            publishedOn: "2016-07-16T19:20:30+01:00",
            thumbnail: "http://t1.gstatic.com/images?q=tbn:ANd9GcTE9VcT73gn376pTp11M4KfNCZkbWBeDtpD3PKfnC5GRpyWP_N3",
            duration: 108,
            description: "It's been a great year so far",
            filepath: "https://ndtvod.bc-gravity.com/210563_320.mp4",
            fullImage: "http://i.ndtvimg.com/images1467304972.jpg",
            category: "Football"
        }]
    }))
}).listen
(8088);