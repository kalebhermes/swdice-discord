module.exports = {

    "botToken" : '',
    
    "symbols" : {
        'Success': '<:success:xxxxxxxxxxxxxxxxxx>',
        'Advantage': '<:advantage:xxxxxxxxxxxxxxxxxx>',
        'Failure': '<:failure:xxxxxxxxxxxxxxxxxx>',
        'Threat': '<:threat:xxxxxxxxxxxxxxxxxx>',
        'Triumph': '<:triumph:xxxxxxxxxxxxxxxxxx>',
        'Despair': '<:despair:xxxxxxxxxxxxxxxxxx>',
        'Black': '<:darkside:xxxxxxxxxxxxxxxxxx>',
        'White': '<:lightside:xxxxxxxxxxxxxxxxxx>',
        'd20': '',
        'blank': '',
    },

    "diceArray" : {
      'g': {
          'sides':8,
          'emoji':'<:abilitybg:xxxxxxxxxxxxxxxxxx>',
          'faces':{
            1: 'Blank',
            2: 'Success',
            3: 'Success',
            4: 'Success Success', 
            5: 'Advantage',
            6: 'Advantage',
            7: 'Advantage Success',
            8: 'Advantage Advantage'
            }
        },
      'y': {
          'sides':12,
          'emoji':'<:proficiencybg:xxxxxxxxxxxxxxxxxx>',
          'faces':{
            1: 'Blank',
            2: 'Success',
            3: 'Success Success',
            4: 'Success Success',
            5: 'Advantage',
            6: 'Advantage Success',
            7: 'Advantage Success',
            8: 'Advantage Success',
            9: 'Advantage Advantage',
            10: 'Advantage Advantage',
            11: 'Advantage Advantage',
            12: 'Triumph'
            }
        },
      'b': {
          'sides':6,
          'emoji':'<:boostbg:xxxxxxxxxxxxxxxxxx>',
          'faces':{
            1: 'Blank',
            2: 'Blank',
            3: 'Success',
            4: 'Advantage Success',
            5: 'Advantage',
            6: 'Advantage Advantage'
            }
        },
      'p': {
          'sides':8,
          'emoji':'<:difficultybg:xxxxxxxxxxxxxxxxxx>',
          'faces':{
            1: 'Blank',
            2: 'Failure',
            3: 'Failure Failure',
            4: 'Threat', 
            5: 'Threat',
            6: 'Threat',
            7: 'Threat Threat',
            8: 'Threat Failure'
            }
        },
      'r': {
          'sides':12,
          'emoji':'<:challengebg:xxxxxxxxxxxxxxxxxx>',
          'faces':{
            1: 'Blank',
            2: 'Failure',
            3: 'Failure',
            4: 'Failure Failure',
            5: 'Failure Failure',
            6: 'Threat',
            7: 'Threat',
            8: 'Threat Failure',
            9: 'Threat Failure',
            10: 'Threat Threat',
            11: 'Threat Threat',
            12: 'Despair'
            }
        },
      'k': {
          'sides':6,
          'emoji':'<:setbackbg:xxxxxxxxxxxxxxxxxx>',
          'faces':{
            1: 'Blank',
            2: 'Blank',
            3: 'Failure',
            4: 'Failure',
            5: 'Threat',
            6: 'Threat'
            }
        },
      'f': {
          'sides':12,
          'emoji':'<:forcebg:xxxxxxxxxxxxxxxxxx>',
          'faces':{
            1: 'Black',
            2: 'Black',
            3: 'Black',
            4: 'Black',
            5: 'Black',
            6: 'Black',
            7: 'Black Black',
            8: 'White',
            9: 'White',
            10: 'White White',
            11: 'White White',
            12: 'White White'
            }
        }
    }
}