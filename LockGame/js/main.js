$(
    () => {

         // set body content center
        $('body').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        });

        // set title css
        $('#lock-game-title').css({
            'font-size': '48px',
            'font-weight': 'bold'
        });

        // style the start game button
        $('#btn-start').css({
            'background-color': 'black',
            'width': '175px',
            'height': '75px',
        });

        // button start events

        //mouseenter
        $('#btn-start').on('mouseenter', function() {
            $(this).css({
                'background-color': 'grey',
                'cursor': 'pointer'
            });
        });

        //mouseleave
        $('#btn-start').on('mouseleave', function() {
            $(this).css({
                'background-color': 'black'
            });
        });

        //mouseclick
        $('#btn-start').click(function() {
            $(this).hide();
            $('#lock-game').css({
                'display': 'flex'
            })
        });

        // style button text
        $('#btn-start p').css({
            'color': 'white',
            'font-size': '24px',
            'font-weight': 'bold'
        });

        // set lock game
        $('#lock-game').css({
            'display': 'none',
            'margin-top': '50px',
            'border': '1px solid black',
            'width': '500px',
            'height': '300px',
            'background-color': 'grey',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        });

        // lock game info
        $('#lock-game-info').css({
            'margin': '20px 50px 0px 50px',
            'height': '80px',
            'width': '350px',
            'background-color': 'black',
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        });

        // set lock game info text styling
        $('#lock-game-info p').css({
            'color': 'white'
        });

        // set lock game info text
        $('#lock-game-info p').html('Red Background guess is low;<br> Blue background guess is high;');

        // define lock-game-board
        $('#lock-game-board').css({
            'margin': '20px 0px 0px 0px',
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        });

        $("#lock-game-board-unit").css({
            'display': 'flex'
        })

        $("input").css({
            'width': '50px',
            'height': '50px',
            'text-align': 'center',
            'font-size': '42px',
            'margin': '10px',
            'background-color': 'yellow',
            'border-color': 'yellow'
        });

        $("#btn").css({
            'display': 'flex',
            'margin': '10px',
            'width': '150px',
            'border': '1px solid black',
            'border-radius': '15px',
            'background-color': 'white'
        });

        $("#btn").on('mouseenter',function() {
                $(this).css({
                    'cursor': 'pointer',
                    'background-color': 'brown'
                })
            }
        )

        $('#btn').on('mouseleave', function() {
            $(this).css({
                'background-color': 'white'
            });
        });

        $("#btn p").css({
            'font-weight': 'bold'
        })
    }
)