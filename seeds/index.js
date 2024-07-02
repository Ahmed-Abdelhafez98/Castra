const mongoose = require('mongoose')
const cities = require('./cities')
const {
    places,
    descriptors
} = require('./seedHelpers')
const campground = require('../models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await campground.deleteMany({})
    for (let i = 0; i < 400; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10
        const camp = new campground({
            author: '603140c277102a0b0c804ff5',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: {
              type: "Point",
              coordinates: [
                cities[random1000].longitude,
                cities[random1000].latitude
              ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/abdelhafez/image/upload/v1615990750/Castra/nj4gzhk8fvbes7bcyxsh.jpg',
                    filename: 'Castra/nj4gzhk8fvbes7bcyxsh'
                  },
                  {
                    url: 'https://res.cloudinary.com/abdelhafez/image/upload/v1615990751/Castra/q1h0gskkcfoqdma2cleh.jpg',
                    filename: 'Castra/q1h0gskkcfoqdma2cleh'
                  },
                  {
                    url: 'https://res.cloudinary.com/abdelhafez/image/upload/v1615990750/Castra/dxecxjkxxjclapfgbkkt.jpg',
                    filename: 'Castra/dxecxjkxxjclapfgbkkt'
                  },
                  {
                    url: 'https://res.cloudinary.com/abdelhafez/image/upload/v1615990751/Castra/d1uoyn5chkvrdgs20xtl.jpg',
                    filename: 'Castra/d1uoyn5chkvrdgs20xtl'
                  },
                  {
                    url: 'https://res.cloudinary.com/abdelhafez/image/upload/v1615990752/Castra/tgfkppdbbknkoaaohrvq.jpg',
                    filename: 'Castra/tgfkppdbbknkoaaohrvq'
                  }
            ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque beatae aperiam incidunt sint nobis aut quod deleniti assumenda dolorem eum. Facilis obcaecati',
            price
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})