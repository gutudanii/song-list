package com.playlist.song;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/api/songs")
@AllArgsConstructor
public class MediaController {

    @Autowired
    final MediaService mediaService;

    @Autowired
    final MediaRepository mediaRepository;
    @PostMapping
    public void saveMedia(@RequestBody Media media){
        Media m = new Media(
                media.getId(),
                media.getName(),
                media.getDescription(),
                media.getAuthor(),
                media.getReleasedDate(),
                media.getType()
        );
        mediaService.createMedia(m);
    }

    @GetMapping
    public List<Media> getAllMedia(){
        return mediaService.getAllMedia();
    }

    @DeleteMapping("/{id}")
    public void deleteMedia(@PathVariable("id") Long id){
        mediaService.deleteMedia(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Media> updateSong(@PathVariable Long id, @RequestBody Media songData) {
        Optional<Media> optionalSong = mediaRepository.findById(id);
        if (optionalSong.isPresent()) {
            Media song = optionalSong.get();
            song.setId(songData.getId());
            song.setName(songData.getName());
            song.setType(songData.getType());
            song.setAuthor(songData.getAuthor());
            song.setDescription(songData.getDescription());
            song.setReleasedDate(songData.getReleasedDate());

            Media updatedSong = mediaRepository.save(song);
            return ResponseEntity.ok(updatedSong);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
