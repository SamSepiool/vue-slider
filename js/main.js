const app = new Vue ({
    el: '#root',
    
    data: {
        title: 'Siena',
        counter: 0,
        images:[
            {
                imgSrc:'https://viaggin.com/wp-content/uploads/siena-in-toscana-in-italia.jpg',
                name: 'meme1'
            },
            {
                imgSrc:'https://c0.wallpaperflare.com/preview/161/896/940/ancient-architecture-basilica-of-san-domenico-building.jpg',
                name: 'meme1'
            },
            {
                imgSrc:'https://c4.wallpaperflare.com/wallpaper/657/237/163/castle-siena-italy-piazza-del-campo-wallpaper-preview.jpg',
                name: 'meme1'
            },
            {
                imgSrc:'https://c1.wallpaperflare.com/preview/611/47/713/siena-square-of-the-field-tuscany-architecture-renaissance-campanile.jpg',
                name: 'meme1'
            },
            {
                imgSrc:'https://siena.guidatoscana.it/obj/image/blog/x/piazza-del-campo.jpg',
                name: 'meme1'
            },
            {
                imgSrc:'https://cdn.getyourguide.com/img/location/5729adb0a5a87.jpeg/88.jpg',
                name: 'meme1'
            },
            {
                imgSrc:'http://www.antrodichirone.com/wp-content/uploads/2017/08/16083662908_628c024d6b_k.jpg',
                name: 'meme1'
            },

        ]
    },
    methods: {

        nextImg: function() {
            this.counter++;
            (this.counter >= this.images.length) ? this.counter = 0 : null
        },


        prevImg: function(){
            this.counter--;
            (this.counter < 0) ? this.counter = this.images.length : null
        },

        bookmark: function(index){
            this.counter = index;
        },


    },

    mounted: function() {
        autoPlay = setInterval(() => this.nextImg(), 3000)
    }

})