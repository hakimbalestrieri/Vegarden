package hb.vegarden.services;

import hb.vegarden.entities.Plant;
import hb.vegarden.repositories.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantService implements IGenericService<Plant>{

    @Autowired
    private PlantRepository plantRepository;

    @Autowired
    public PlantService(PlantRepository plantRepository) {
        this.plantRepository = plantRepository;
    }

    @Override
    public List<Plant> findAll() {
        return plantRepository.findAll();
    }

    @Override
    public Plant save(Plant entity) {
        return null;
    }

    @Override
    public Plant findById(String name) {
        return plantRepository.findById(name).orElse(null);
    }

    @Override
    public void delete(Plant entity) {

    }

    @Override
    public void deleteById(String id) {

    }
}
