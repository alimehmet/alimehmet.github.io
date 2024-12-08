FROM jekyll/jekyll:4.2.0

WORKDIR /srv/jekyll

COPY Gemfile Gemfile.lock ./

RUN chmod -R 777 /srv/jekyll && bundle install

COPY . .

EXPOSE 4000

CMD ["jekyll", "serve", "--host", "0.0.0.0"]
