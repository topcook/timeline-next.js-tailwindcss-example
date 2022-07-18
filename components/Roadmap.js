import { CheckCircleFilled } from '@ant-design/icons';
import { Timeline } from 'antd';
import 'antd/dist/antd.css';
import style from '../css/Roadmap.module.css';

const Roadmap = () => {
    return (
        <div className='white-text mx-24'>
            <div>
                <div className='text-4xl font-semibold 2 pb-8 phase-number'>
                    Phase 1
                </div>

                <Timeline className='white-text'>
                    <Timeline.Item dot={<CheckCircleFilled className={style.timeline_check_icon} />} color="#8a8379">
                        <div className='content of timeline'>
                            <div className='text-2xl font-medium mb-2 mt-[-2px]'>
                                Formation of team members
                            </div>
                            <div class='mb-2'>
                                We are here to take over! We have the best team in the world
                                working on realising our goals and objectives. We will keep hiring
                                professionals and making strategic partnerships with world class
                                projects and keep realizing our visions for the future.
                            </div>
                        </div>
                    </Timeline.Item>

                    <Timeline.Item dot={<CheckCircleFilled className={style.timeline_check_icon} />} color="#8a8379">
                        <div className='content of timeline'>
                            <div className='text-2xl font-medium mb-2 mt-[-2px]'>
                                Design webpage
                            </div>
                            <div class='mb-2'>
                                Our developers will design an interactive webpage powered by web3 for our community. Our first version will be a regular interface, as we approach to our mint we will reveal our second version of our webpage with all the features of web3.
                            </div>
                        </div>
                    </Timeline.Item>

                    <Timeline.Item color="#8a8379" className='not-passed'>
                        <div className='content of timeline'>
                            <div className='text-2xl font-medium mb-2 mt-[-2px]'>
                                Auction sale (99) (Mp4)
                            </div>
                            <div class='mb-2'>
                                We will be doing a massive auction of 99 unique NFTS which will be live videos of our priceless collectibles ie Meteorites portrayed in 360 degrees.
                            </div>
                        </div>
                    </Timeline.Item>

                    <Timeline.Item color="#8a8379" className='not-passed'>
                        <div className='content of timeline'>
                            <div className='text-2xl font-medium mb-2 mt-[-2px]'>
                                Presale and Public sale mint (3234) (JPEG)
                            </div>
                            <div class='mb-2'>
                                We conduct presale and public sale of 3234 NFTs which are solely photographs of our precious collectibles. Be ready to get your minds blown by the art, we call 'em Space Arts!
                            </div>
                        </div>
                    </Timeline.Item>

                    <Timeline.Item color="#8a8379" className='not-passed'>
                        <div className='content of timeline'>
                            <div className='text-2xl font-medium mb-2 mt-[-2px]'>
                                Meteorite Testing done by a scientist
                            </div>
                            <div class='mb-2'>
                                As you all can see on our social media channels, we have done the magnetic field test also we could see varieties of metallic elements present in our priceless collectibles. We are pretty much confident just like all other meteorite enthusiasts all over the world that we have nothing other than real ‘Meteorites'. In order to support our statements, we will be doing a scientific test done by a scientist and showcase our reports online on our webpage and social media channels. Be it Meteorite or not, we will keep going forward and realise our wild visions for the future.
                            </div>
                        </div>
                    </Timeline.Item>
                </Timeline>
            </div>


            <div>
                <div className='text-4xl font-semibold 2 pb-8 phase-number'>
                    Phase 2
                </div>

                <Timeline className='white-text'>
                    <Timeline.Item color="#8a8379" className='not-passed'>
                        <div className='content of timeline'>
                            <div className='text-2xl font-medium mb-2 mt-[-2px]'>
                                Limited Liability Company established
                            </div>
                            <div class='mb-2'>
                                LLC company is established in a crypto friendly country for a better transparency and security of our highly esteemed communit
                            </div>
                        </div>
                    </Timeline.Item>

                    <Timeline.Item color="#8a8379" className='not-passed'>
                        <div className='content of timeline'>
                            <div className='text-2xl font-medium mb-2 mt-[-2px]'>
                                DAO integration & Dao $token launched
                            </div>
                            <div class='mb-2'>
                                We will be launching our highly anticipated $token which will raise
                                many eyebrows in the entire crypto space. The name of the $token will
                                only be revealed on the launch day which will be huge surprise.
                                Along with its potential utilities and DAO properties, we expect massive
                                adoption world-wide. We will aim to list our $token at a tier 1 exchange
                                for the launch. We are aiming to build a virtual university fully powered
                                by our DAO $token where we offer education for literally free of cost for
                                anyone who hold our $token worth pennies at any market condition.                        </div>
                        </div>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div >
    );
};

export default Roadmap;