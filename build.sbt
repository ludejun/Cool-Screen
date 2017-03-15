name := "cool_screen"

version := "1.0"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  "com.h2database"  %  "h2"                   % "1.4.193",
  "ch.qos.logback"  %  "logback-classic"      % "1.1.7",
  "mysql"           %  "mysql-connector-java" % "5.1.38",
  "org.scalikejdbc" % "scalikejdbc_2.10"      % "2.5.0",
  "org.scalikejdbc" % "scalikejdbc-config_2.10" % "2.5.0"
)     

play.Project.playScalaSettings
