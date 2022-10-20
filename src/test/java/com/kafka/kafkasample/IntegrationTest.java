package com.kafka.kafkasample;

import com.kafka.kafkasample.KafkasampleSampleApp;
import com.kafka.kafkasample.config.AsyncSyncConfiguration;
import com.kafka.kafkasample.config.EmbeddedKafka;
import com.kafka.kafkasample.config.EmbeddedMongo;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { KafkasampleSampleApp.class, AsyncSyncConfiguration.class })
@EmbeddedMongo
@EmbeddedKafka
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_CLASS)
public @interface IntegrationTest {
}
