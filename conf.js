module.exports = {
    db: {
        host:       '172.20.0.8',
        user:       'restful_get',
        password:   'qwertyuiop',
        database:   'test',
        port:       3306
    },
    SERECT : 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCgUZvDTzzU+0zgQMYsSdw5DL4fj3td7VGoea4rC0pvOMCqn5oE1MHOOfSK6m18VhJHPxIbozA3r98eZ+wNOD154CQQHM+YdWcj4LD9bUKtEmjjt7WmvT1LOlwXAyn7Fr1HxNlCnC89ZJS8M8Yv2aBY3tjLWEpFO1B+g+DW/SC08ud8EL0qpoCXUA2Dds9cYyhK5OjM1EQnsYO4rek1BJgzz6Tets4NvEOL8aaizkM41zRF/gC46YChlPN7T6AGmJANGLNyaOC8noxPTqWQcIc10nFklH/J4TnLYEKMf9SyZ4P/GUiASZjQwYcmmo5yfLteabhUhjglOyKjUMQEPPs9AgMBAAECggEBAIBMzzsezrAj7QIK1I3dDkEZ0Y2wZiplIlSSDLCl+IvJ/2aNE9WJ7w/7kZkaw0QeHcKm1vcHQi9OsGDFCkQKHijLGBFM/VYlnsU3rG0kY5feg9K50sX97G+n5MsF3TL0n8Yv4y9LjwKy29VCGflxUMHOlfEmV0nQjjqxj9599Q7ZkeTKia47iATqT9uM/M9re+RRQodzYIzeTxhcTdc9r6sejM6q75JxE1sqaWkKjisWBSwUFpRzBd//uzZadeKnZnAcBTwLDeW6h0nFcN0wSil4+D49y65DY8OSxFUIeS9wdMWNFfmnIVaDCRT3J3gobBVsLHX1XIzJNGdWtzyGcAECgYEAy4oLaY/TvtwSbtcu2Bnzj4ywKxNrlVaWLKoS6w/QYSWIGVSeul0eqwxXlcI8yj0FcqEisouZVCgm+u8ixBcYEfxYMeVL5G+1vfYVaieac4g5K9dhvbmdBu669R4unB0ZfLpE7ocMosmlOz0zA+/wmGO5Cc4cSlmlng/LchTXx90CgYEAyaPJHyjG7wZvqAQTrbXSaVbl/Iyhf308oPtWjM9l2cQEu+UJ3zjQBIYsPXQSr9ufigdyfK5IFFPqetxaQGGxLiLbvFGGNgKFP2k/0X96gxLz2uoufg+RbRZ7t3Kgz1lHmpuB50uQ3Gx1VBKjYVtD9HG/Ms9Y0EOrERGrmCDDeuECgYBtnCirL25LgT5X/H/YlpkofA4/FFVCdf+ni+tmNPz14/1YDs7v88fZO2tLVe/gxV3Srl3+ItlujbT4O6HQUdN/lBJ2xFHLcjFAXG6J3Uv63ahUKMgVIQkkO5no+NkG71DTb4hBn+65F7hon3uCqks59bInSpzHmWFsLntUM09E7QKBgQCnv+TAUXI+xIH7q3ibmZo1HKA1HOH2aEAaRT7Z4mj/Y/30OzWdSWx1dxIzBe/N8c6mTE/Ivk0k7DM0h0FmMl/u2/0mjEQ1hp9IA82eAonvpcLNqumG4ni/4maGVYzHM6VIUHsf61PWrTxm9yKJCh5crIy+PpXKnaEhkCvLYeZ+wQKBgGr7tv0n82u2rKNiKNHsqqwDGJgbPXwLt31FLjNeHoUAMDDntY5D6hR+NjcAkKHXiM2Rhi+gjYqWQnFOaSbX0L4giBCXqaYlIhseCtEvGCjJZLPo4qjLJo0+AfeLfQfMZEVeXb4UgQECl6w4I6kOlkFwA8g/ODlnAUdEd8oZeef9',
    corsOptions:{
        
        "origin"                : ['http/localhost:8080','http/localhost:8081','http/localhost:8001'],
        "methods"               : "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue"     : false,
        "optionsSuccessStatus"  : 204,
        "credentials"           : true
        
    }
};
