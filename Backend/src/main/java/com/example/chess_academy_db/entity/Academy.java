package com.example.chess_academy_db.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
// import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Academy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int academyId;
    private String academyName;
    private String academyDesc;
    private String location;
    private String duration;
    private long contact;


    
}