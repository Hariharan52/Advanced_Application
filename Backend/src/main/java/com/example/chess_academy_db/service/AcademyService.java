package com.example.chess_academy_db.service;

import com.example.chess_academy_db.entity.Academy;
import com.example.chess_academy_db.repository.AcademyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AcademyService {

    @Autowired
    private AcademyRepo academyRepository;

    public void createAcademy(Academy academy) {
     academyRepository.save(academy);
    }

    public Academy getAcademyById(int academyId) {
        return academyRepository.findById(academyId).orElse(null);
    }

    public Academy updateAcademy(int academyId, Academy updatedAcademy) {
        if (academyRepository.existsById(academyId)) {
            updatedAcademy.setAcademyId(academyId);
            return academyRepository.save(updatedAcademy);
        } else {
            return null; // Indicate not found
        }
    }

    public void deleteAcademy(int academyId) {
        academyRepository.deleteById(academyId);
    }
}
