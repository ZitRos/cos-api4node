const test = require( 'tape' )
const conn = require('../conn')
const API = require('../api')

test( 'getDocNames', assert => {
    
    const api = API( conn )
    
    api.getDocNames( { generated: 0 }, ( err, json ) => {
                
        assert.ok( !err, 'status ok' )

        const docs = json.result.content
        
        assert.true( docs.length, 'has sources' )
        assert.end()

    })

})
