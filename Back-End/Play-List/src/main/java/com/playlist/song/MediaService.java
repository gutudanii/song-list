package com.playlist.song;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface MediaService {
    void createMedia(Media media);
    List<Media> getAllMedia();
    Optional<Media> getById(Long id);
//    Media updateMedia(Media media, Long id);
    void deleteMedia(Long id);
}
