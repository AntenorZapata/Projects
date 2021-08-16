delimiter $$
CREATE TRIGGER trigger_usuario_delete
  BEFORE DELETE ON user
  FOR EACH ROW
BEGIN
  DELETE FROM follow where user_id = OLD.user_id;
  DELETE FROM history where user_id = OLD.user_id;
END
$$

delimiter ;
