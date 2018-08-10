# == Schema Information
#
# Table name: events
#
#  id                    :bigint(8)        not null, primary key
#  title                 :string           not null
#  description           :text             not null
#  date                  :date             not null
#  time                  :time             not null
#  organizer_id          :integer          not null
#  organizer_description :text
#  img_url               :string
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Event < ApplicationRecord
  validates :title, :date, :time, :organizer_id, presence: true

  belongs_to :organizer,
  foreign_key: :organizer_id,
  class_name: :User

end