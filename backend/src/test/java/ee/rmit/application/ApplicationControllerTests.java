package ee.rmit.application;

import static io.restassured.RestAssured.get;
import static io.restassured.RestAssured.given;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;

import ee.rmit.application.enums.ApplicationAppType;
import ee.rmit.application.repositories.jpa.entity.ApplicationEntity;
import ee.rmit.application.services.ApplicationService;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApplicationControllerTests {

	@LocalServerPort
	private int port;

	private String url;
	private ApplicationEntity application;

	@PostConstruct
	public void init() {
		url = "http://localhost:" + port + "/api/v1/application";
	}

	@MockBean
	ApplicationService applicationService;

	@BeforeEach
	public void setup() {
		application = createApplicationEntity("Demo.App.v1", "Demo.v1", "Demo.v1.Group", ApplicationAppType.JAVA, "Demo version 1");
	}

	private ApplicationEntity createApplicationEntity(String appCode, String name, String appGroup, ApplicationAppType appType, String description) {
		ApplicationEntity application = new ApplicationEntity();
		
		application.setAppCode(appCode);
		application.setAppGroup(appGroup);
		application.setAppType(appType);
		application.setDescription(description);
		application.setName(name);
		
		return application;
	}
	
	@Test
	public void whenCallingListEndpoint_thenReturnAllApplications() {

		List<ApplicationEntity> applicationSet = new ArrayList<>();
		applicationSet.add(createApplicationEntity("Demo.v1", "Demo.v1", "Demo.v1.Group", ApplicationAppType.JAVA, "Demo version 1"));
		applicationSet.add(createApplicationEntity("Test.v1", "Test.v1", "Test.v1.Group", ApplicationAppType.JAVA, "Test version 1"));
		when(applicationService.list()).thenReturn(applicationSet);

		get(url + "/list").then().statusCode(HttpStatus.OK.value()).assertThat().body("size()", is(2));

		ApplicationEntity[] participants = get(url + "/list").then().statusCode(200).extract()
		    .as(ApplicationEntity[].class);
		assertThat(participants.length).isEqualTo(2);
	}

	@Test
	public void whenCallingGetEndpoint_withGivenAppCode_thenReturnApplication() throws URISyntaxException, UnsupportedEncodingException {

		when(applicationService.get("Demo.App.v1")).thenReturn(Optional.of(application));

		URI uri = new URI(url + "/get/" + application.getAppCode());

		get(uri).then().assertThat().statusCode(HttpStatus.OK.value())
		    .body("appCode", equalTo(application.getAppCode()))
		    .body("name", equalTo(application.getName()))
		    .body("description", equalTo(application.getDescription()))
		    .body("appGroup", equalTo(application.getAppGroup()))
		    .body("appType", equalTo(application.getAppType().toString()));

		ApplicationEntity result = get(uri).then().assertThat()
		    .statusCode(HttpStatus.OK.value()).extract().as(ApplicationEntity.class);
		
		assertThat(result).isEqualTo(application);

		String responseString = get(uri).then().assertThat()
		    .statusCode(HttpStatus.OK.value()).extract().asString();
		assertThat(responseString).isNotEmpty();
	}

	@Test
	public void whenCallingUpdateEndpoint_withGivenApplication_thenCorrect() {

		when(applicationService.update(any(ApplicationEntity.class))).thenReturn(application);

		String appCode = given().contentType("application/json").body(application).when().post(url + "/update").then()
		    .assertThat().statusCode(HttpStatus.OK.value()).extract().path("appCode");

		assertThat(appCode).isEqualTo(application.getAppCode());

		ApplicationEntity result = given().contentType("application/json").body(application).when()
		    .post(url + "/update").then().assertThat().statusCode(HttpStatus.OK.value()).extract()
		    .as(ApplicationEntity.class);
		assertThat(result).isEqualTo(application);
	}

	@Test
	public void whenCallingAddEndpoint_withGivenApplication_thenCorrect() {

		when(applicationService.add(any(ApplicationEntity.class))).thenReturn(application);

		String appCode = given().contentType("application/json").body(application).when().post(url + "/add").then()
		    .assertThat().statusCode(HttpStatus.OK.value()).extract().path("appCode");

		assertThat(appCode).isEqualTo(application.getAppCode());

		ApplicationEntity result = given().contentType("application/json").body(application).when().post(url + "/add")
		    .then().assertThat().statusCode(HttpStatus.OK.value()).extract().as(ApplicationEntity.class);
		assertThat(result).isEqualTo(application);
	}
}
