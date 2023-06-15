package com.playlist.song;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class MediaServiceImpl implements MediaService{

    @Autowired
    final MediaRepository mediaRepository;

    @Override
    public void createMedia(Media media) {
           mediaRepository.save(media);
    }

    @Override
    public List<Media> getAllMedia() {
        return mediaRepository.findAll();
    }

    @Override
    public Optional<Media> getById(Long id) {
        return mediaRepository.findById(id);
    }



    @Override
    public void deleteMedia(Long id) {
        mediaRepository.deleteById(id);
    }
}
