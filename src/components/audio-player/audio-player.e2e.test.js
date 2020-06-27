import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const isPlaying = true;

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  }
};

it(`Should call callback on answer input change`, () => {
  const {src} = mock.song;
  const onButtonClick = jest.fn(function (...args) {
    return [...args];
  });
  const audioPlayer = mount(
      <AudioPlayer
        src={src}
        isPlaying={isPlaying}
        onPlayButtonClick={onButtonClick}
      />
  );
  window.HTMLMediaElement.prototype.play = () => {
  };
  window.HTMLMediaElement.prototype.pause = () => {
  };

  const trackButton = audioPlayer.find(`.track__button`);

  expect(audioPlayer.find(`.track__button--pause`)).toHaveLength(1);

  audioPlayer.setState({isLoading: false});
  trackButton.simulate(`click`);

  expect(audioPlayer.find(`.track__button--play`)).toHaveLength(1);
  expect(onButtonClick).toHaveBeenCalledTimes(1);
});
