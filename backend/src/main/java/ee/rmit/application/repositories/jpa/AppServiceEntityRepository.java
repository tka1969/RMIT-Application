package ee.rmit.application.repositories.jpa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ee.rmit.application.repositories.jpa.entity.AppServiceEntity;

@Repository
public interface AppServiceEntityRepository extends JpaRepository<AppServiceEntity, String> {
	List<AppServiceEntity> findByAppCode(String application);
}
