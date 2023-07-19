package greenNare.product.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
@Entity
@NoArgsConstructor
//@AllArgsConstructor
@Getter
@Setter
//@Builder
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int reviewId;

    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "productId")
    private Product product;

    //@Column(nullable = false)
    private String context;
    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

//    @OneToMany(mappedBy = "review")
//    private List<Image> imageLinks;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }

    public Review(Member member, Product product, String context) {
        this.member = member;
        this.product = product;
        this.context = context;
    }


}

