package ee.rmit.application.configurations;


import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.solr.core.SolrOperations;
import org.springframework.data.solr.core.SolrTemplate;
import org.springframework.data.solr.repository.config.EnableSolrRepositories;


@Configuration
@EnableSolrRepositories("ee.rmit.application.repositories.solr")
@PropertySource("classpath:application.properties")
public class SolrConfig {
	
	@Value("${spring.data.solr.host}") String solrURL;
		

  @Bean
  public SolrClient solrClient() {
  	return new HttpSolrClient.Builder(solrURL).build();
  }

  @Bean
  public SolrOperations solrTemplate() {
    return new SolrTemplate(solrClient());
  }
}
