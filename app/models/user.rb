class User < ActiveRecord::Base
  	attr_accessible :email

  	# after_save :signup_welcome_email

 #  	private
 #  	def signup_welcome_email 
 #  		UserMailer.sign_up(self).deliver
	# end
end
