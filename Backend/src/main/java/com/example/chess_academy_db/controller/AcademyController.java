package com.example.chess_academy_db.controller;

import com.example.chess_academy_db.entity.Academy;
import com.example.chess_academy_db.service.AcademyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/academies")
public class AcademyController {

    @Autowired
    private AcademyService academyService;

    @PostMapping("/postacademy")
    public void createAcademy(@RequestBody Academy academy) {
        academyService.createAcademy(academy);
 
    }

    @GetMapping("/{academyId}")
    public ResponseEntity<Academy> getAcademyById(@PathVariable int academyId) {
        Academy academy = academyService.getAcademyById(academyId);
        if (academy != null) {
            return ResponseEntity.ok(academy);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{academyId}")
    public ResponseEntity<Academy> updateAcademy(@PathVariable int academyId, @RequestBody Academy academy) {
        Academy updatedAcademy = academyService.updateAcademy(academyId, academy);
        if (updatedAcademy != null) {
            return ResponseEntity.ok(updatedAcademy);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{academyId}")
    public ResponseEntity<Void> deleteAcademy(@PathVariable int academyId) {
        academyService.deleteAcademy(academyId);
        return ResponseEntity.noContent().build();
    }
}
