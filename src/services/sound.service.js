
import axios from 'axios';

import { storageService } from './storage.service'

export const soundService = {
  search,
  addSearch,
  getFromStorage,
  saveLayout

}

function search(term) {

  const termVideosMap = storageService.loadFromStorage('soundsSearch') || {};
  if (termVideosMap[term]) {

    storageService.saveToStorage('currSearch', termVideosMap[term]);
    return Promise.resolve(termVideosMap[term]);
  }

  console.log('Getting from Network');

  return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&audioEmbeddable=true&type=audio&maxResults=24&key=AIzaSyCp8KMTEjR9frWUGpSnc8Cw5cLVe7wRRDM&q=${term}`)
    .then(res => {
      var youtubeA = res.data.items;

      var audios = youtubeA.map(youtubeAudio => ({
        id: youtubeAudio.id.videoId,
        title: youtubeAudio.snippet.title.substring('#'),
        img: {
          url: youtubeAudio.snippet.thumbnails.default.url,
          width: youtubeAudio.snippet.thumbnails.default.width,
          height: youtubeAudio.snippet.thumbnails.default.height,
        }
      }))

      termVideosMap[term] = audios;
      storageService.saveToStorage('soundsSearch', termVideosMap)
      storageService.saveToStorage('currSearch', audios)
      return audios;
    })
}

function addSearch(search) {
  const prevSearch = storageService.loadFromStorage('prevSearch') || [];
  var repeat = false
  prevSearch.forEach(prevs => {
    if (prevs === search) {
      repeat = true;
      return
    }
  })
  if (repeat) return
  if (prevSearch.length >= 5) prevSearch.pop()
  prevSearch.unshift(search);
  storageService.saveToStorage('prevSearch', prevSearch)
  return prevSearch
}

function getFromStorage(key) {

  return storageService.loadFromStorage(key);

}

function saveLayout(newLayout) {
  storageService.saveToStorage('layout', newLayout)

}