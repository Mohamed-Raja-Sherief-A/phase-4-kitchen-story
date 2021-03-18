package com.kitchen.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.kitchen.model.UserCredentials;

//UserCredentials Repository
@Repository
public interface UserDAO extends JpaRepository<UserCredentials, String> {
@Query("SELECT u FROM UserCredentials u WHERE u.username=?1 and u.password=?2")
public UserCredentials checkCredentials(String username,String password);
}
