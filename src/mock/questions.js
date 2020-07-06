const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d7/Bass_chorus_sound_1_%28new_wave_post-punk%29.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/7/7b/12barBlues002.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/5/59/Acoustic_Jazz_Quartet_no1_%28exploration%29.flac`,
      genre: `jazz`,
    }, {
      src: `http://beloweb.ru/audio/dillon_-_thirteen_thirtyfive_.mp3`,
      genre: `pop`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/2/2e/BlueMoonOfKentucky.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/AC`,
      artist: `Jim Beam`,
    }],
  }
];
