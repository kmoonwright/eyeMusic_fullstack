import * as MusicApiUtil from '../util/music_util'

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_ONE_SONG = 'RECEIVE_ONE_SONG';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ONE_ALBUM = 'RECEIVE_ONE_ALBUM';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ONE_ARTIST = 'RECEIVE_ONE_ARTIST';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_ONE_PLAYLIST = 'RECEIVE_ONE_PLAYLIST';


// THUNK ACTIONS

// SONGS
export const fetchAllSongs = () => dispatch => {
    return MusicApiUtil.fetchAllSongs()
        .then(songs => dispatch({
            type: RECEIVE_ALL_SONGS,
            songs
        })
    )
};
export const fetchOneSong = (songId) => dispatch => {
    return MusicApiUtil.fetchOneSong(songId)
        .then(song => dispatch({
            type: RECEIVE_ONE_SONG,
            song
        })
    )
};

// ALBUMS
export const fetchAllAlbums = () => dispatch => {
    return MusicApiUtil.fetchAllAlbums()
        .then(albums => dispatch({
            type: RECEIVE_ALL_ALBUMS,
            albums
        })
    )
};
export const fetchOneAlbum = (albumId) => dispatch => {
    return MusicApiUtil.fetchOneAlbum(albumId)
        .then(payload => dispatch({
            type: RECEIVE_ONE_ALBUM,
            payload
        })
    )
};

// ARTISTS
export const fetchAllArtists = () => dispatch => {
    return MusicApiUtil.fetchAllArtists()
        .then(artists => dispatch({
            type: RECEIVE_ALL_ARTISTS,
            artists
        })
    )
};
export const fetchOneArtist = (artistId) => dispatch => {
    return MusicApiUtil.fetchOneArtist(artistId)
        .then(payload => dispatch({
            type: RECEIVE_ONE_ARTIST,
            payload
        })
    )
};

// PLAYLISTS
export const fetchAllPlaylists = () => dispatch => {
    return MusicApiUtil.fetchAllPlaylists()
        .then(playlists => dispatch({
            type: RECEIVE_ALL_PLAYLISTS,
            playlists
        })
    )
};
export const fetchOnePlaylist = (playlistId) => dispatch => {
    return MusicApiUtil.fetchOnePlaylist(playlistId)
        .then(payload => dispatch({
            type: RECEIVE_ONE_PLAYLIST,
            payload
        })
    )
};
export const createPlaylist = (playlist) => dispatch => (
    MusicApiUtil.createPlaylist(playlist)
        .then(playlist => dispatch({
            type: RECEIVE_ONE_PLAYLIST,
            playlist
        })
    )
);
export const deletePlaylist = (id) => dispatch => (
    MusicApiUtil.deletePlaylist(id)
        .then(playlists => dispatch({
            type: RECEIVE_ALL_PLAYLISTS,
            playlists
        })
    )
)
// export const addSongToPlaylist = (data) => dispatch => (
    
// )
// export const removeSongFromPlaylist = (id, data) => dispatch => (

// )