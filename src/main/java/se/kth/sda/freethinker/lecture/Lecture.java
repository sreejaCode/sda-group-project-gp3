package se.kth.sda.freethinker.lecture;

import se.kth.sda.freethinker.subject.Subject;
import se.kth.sda.freethinker.topics.Topic;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;


@Entity
public class Lecture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")

    private String body;

    @Column(columnDefinition = "TIMESTAMP")
    private Date unlockTime;

    @ManyToOne
    private Topic topic;


    public Lecture(){

    }

    public Lecture(Long id, String title, String body) {
        this.id = id;
        this.title = title;
        this.body = body;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }



}
