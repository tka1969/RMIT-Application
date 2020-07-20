package ee.rmit.application.repositories.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ee.rmit.application.repositories.jpa.entity.ApplicationEntity;

@Repository
public interface ApplicationEntityRepository extends JpaRepository<ApplicationEntity, String> {
}
