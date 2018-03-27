// Dependencies:
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/html5media/1.1.8/html5media.min.js
// https://cdnjs.cloudflare.com/ajax/libs/plyr/2.0.18/plyr.js

// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/


jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            // mediaPath = 'https://archive.org/download/mythium/',
            mediaPath = '/home/kotik/git/site/music/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Royal Blood - Out Of The Black",
                "duration": "4:01",
                "file": "01. Out Of The Black"
            }, {
                "track": 2,
                "name": "The Forsaken - Broadwing Studio (Final Mix)",
                "duration": "8:30",
                "file": "01 Next To Me"
            }, {
                "track": 3,
                "name": "The Kasabian - Bumblebeee",
                "duration": "4:00",
                "file": "02. Bumblebeee"
            }, {
                "track": 4,
                "name": "Louna - 1984",
                "duration": "6:00",
                "file": "Louna – 1984 (новый рейх)"
            }, {
                "track": 5,
                "name": "The Kasabian - Stevie",
                "duration": "5:05",
                "file": "03. Stevie"
            }, {
                "track": 6,
                "name": "Uknown - Champion",
                "duration": "2:48",
                "file": "08 Champion"
            }, {
                "track": 7,
                "name": "The Kasabian - Alternate Cuts",
                "duration": "4:26",
                "file": "12. Bow"
            }, {
                "track": 8,
                "name": "30 Seconds To Mars - Kings And Queens",
                "duration": "5:05",
                "file": "30 Seconds To Mars - Kings And Queens"
            }, {
                "track": 9,
                "name": "Guns N' Roses - November Rain",
                "duration": "9:01",
                "file": "Guns N' Roses - November Rain_149475199"
            }, {
                "track": 10,
                "name": "Badflower - Soap",
                "duration": "5:25",
                "file": "Badflower - Soap"
            }],
            buildPlaylist = $(tracks).each(function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><span class="plNum">' + trackNumber + '.</span><span class="plTitle">' + trackName + '</span><span class="plLength">' + trackDuration + '</span></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});

// initialize plyr
plyr.setup($('#audio1'), {});

$('.but').on('click', () => {
$('.jumbotron').addClass('hide');  });
